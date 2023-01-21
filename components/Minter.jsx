import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';
import { ethers } from 'ethers';
import { config } from '../constants';
import picardyDomainFactoryAbi from '../constants/picardyDomainFactoryAbi.json';
import picardyDomainAbi from '../constants/picardyDomainAbi.json';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MintedModal from './MintedModal';
import localFont from '@next/font/local';

const euclid = localFont({
  src: './euclid-fonts/Euclid Circular A Regular.ttf',
  variable: '--font-euclid',
});

const Minter = () => {
  const { address, isConnected } = useAccount();
  const [userDomain, setUserDomain] = useState('');
  const [selectTld, setSelectTld] = useState('.picardy');
  const [selectTldPrice, setSelectTldPrice] = useState('0.5');
  const [domainFactory, setDomainFactory] = useState('');
  const [tlds, setTlds] = useState();
  const [openMintModal, setOpenMintModal] = useState(false);
  const [nftHash, setNftHash] = useState('');

  const notify = (e) => {
    e.preventDefault();

    toast.error('Please connect a Compatible Web3 Wallet', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const getTldPrice = async (tld) => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_POLYGON_MUMBAI_ENDPOINT
    );

    const tldAddress = await domainFactory.tldNamesAddresses(tld);

    const domainContract = new ethers.Contract(
      tldAddress,
      picardyDomainAbi,
      provider
    );

    const price = await domainContract.price();
    const formatPrice = ethers.utils.formatEther(price);
    setSelectTldPrice(formatPrice);
  };

  const getTldDomains = async () => {
    const provider = new ethers.providers.JsonRpcProvider(
      process.env.NEXT_PUBLIC_POLYGON_MUMBAI_ENDPOINT
    );
    // const signer = provider.getSigner();

    const newDomainFactory = new ethers.Contract(
      config.domainFactoryAddress,
      picardyDomainFactoryAbi,
      provider
    );

    setDomainFactory(newDomainFactory);

    const tldAddresses = await newDomainFactory.getTldsArray().then((res) => {
      setTlds(res);
    });
  };

  const handleChange = (event) => {
    setSelectTld(event.target.value);
    getTldPrice(event.target.value);
  };

  const handleMintOnClose = () => setOpenMintModal(false);

  useEffect(() => {
    getTldDomains();
  }, []);

  const mintDomain = async (e) => {
    e.preventDefault();

    if (userDomain.trim().length === 0) {
      toast.error('Input cannot be empty', {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const formatPrice = await ethers.utils.parseUnits(selectTldPrice, 18);
    const formattedName = userDomain.replace(/\s+/g, '').toLowerCase().trim();
    const tldAddress = await domainFactory.tldNamesAddresses(selectTld);

    const domainContract = new ethers.Contract(
      tldAddress,
      picardyDomainAbi,
      signer
    );

    const mintNotification = toast.loading(
      'Please wait! Minting your NFT Domain'
    );

    const mint = await domainContract.mint(formattedName, address, {
      value: formatPrice,
    });
    const receipt = await mint.wait();

    toast.update(mintNotification, {
      render: 'Mint Completed Successfully',
      type: 'success',
      isLoading: false,
      autoClose: 7000,
    });

    const txHash = await receipt.transactionHash;
    setNftHash(txHash);
    setOpenMintModal(true);

    // const userInput = userDomain.concat(selectTld);
    // const formatInput = userInput.replace(/\s+/g, '').toLowerCase().trim();

    // const userName =
  };
  console.log(isConnected);

  return (
    <section className="mt-6">
      <form>
        <div className="mb-6 flex items-center mx-6  md:mx-[180px] lg:mx-[400px]  text-center">
          <input
            type="text"
            id="last_name"
            className={`${euclid.variable} font-serif bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg outline-none focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5`}
            placeholder="Enter your preferred name"
            required
            value={userDomain}
            onChange={(e) => setUserDomain(e.target.value)}
          />
          <div className="p-0 rounded-r-lg">
            <select
              className={`${euclid.variable} font-serif focus:outline-none h-[42px]  rounded-r-lg bg-gradient-to-r from-[#C6FFDD] via-[#FBD786] to-[#F7797D] font-bold`}
              onChange={handleChange}
            >
              {tlds
                ? tlds.map((option, index) => (
                    <option key={index} value={option} className="p-2">
                      {option}
                    </option>
                  ))
                : '...'}
            </select>
          </div>
        </div>

        <MintedModal
          txHash={nftHash}
          openMintModal={openMintModal}
          handleOnClose={handleMintOnClose}
        />

        <p
          className={`${euclid.variable} font-serif text-white font-bold text-center mb-4`}
        >
          Domain Price: {selectTldPrice} MATIC
        </p>

        {isConnected && (
          <button
            type="submit"
            className="text-black mt-10 uppercase font-bold  flex mx-auto text-[20px] justify-center bg-guideYellow hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-black rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            onClick={mintDomain}
          >
            Claim Domain
          </button>
        )}

        {!isConnected && (
          <button
            type="submit"
            className="text-black mt-10 uppercase font-bold  flex mx-auto text-[20px] justify-center bg-guideYellow hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-black rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-black dark:hover:bg-black dark:focus:ring-black"
            onClick={notify}
          >
            Claim Domain
          </button>
        )}
        <ToastContainer />
      </form>
    </section>
  );
};

export default Minter;
