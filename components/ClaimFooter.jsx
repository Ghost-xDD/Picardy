import React from 'react';
import Image from 'next/image';
import { picardy2, pineapple2 } from '../public/assets';
import { FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { BsGithub, BsMedium } from 'react-icons/bs';
import localFont from '@next/font/local';

const lemonMilk = localFont({
  src: './lemon-font/LemonMilkRegular-X3XE2.otf',
  variable: '--font-lemonmilk',
});

const euclid = localFont({
  src: './euclid-fonts/Euclid Circular A Regular.ttf',
  variable: '--font-euclid',
});

const ClaimFooter = () => {
  return (
    <>
      <div className="">
        <div className="bg-claimFooter h-1/2 w-full flex md:flex-row flex-col justify-around items-start px-18 py-10 ">
          <Image src={pineapple2} />

          <div className="p-5 mt-6">
            <ul>
              <span className="flex items-center gap-3 pb-6">
                <Image
                  src={picardy2}
                  className="text-gray-800 font-bold text-3xl "
                />
              </span>

              <p
                className={`${euclid.variable} font-serif text-black text-lg`}
              >
                Community tooling that improves the creator economy.
              </p>

              <div className="flex gap-6 pb-5 mt-4 text-black">
                <BsGithub className="text-2xl cursor-pointer hover:text-yellow-600" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaDiscord className="text-2xl cursor-pointer hover:text-red-600" />
                <BsMedium className="text-2xl cursor-pointer hover:text-red-600" />
              </div>
            </ul>
          </div>

          <div className="p-5 mt-6">
            <ul>
              <p
                className={`${lemonMilk.variable} text-black font-sans font-bold text-xl pb-4`}
              >
                Other Tools
              </p>
              <li
                className={`${euclid.variable}  text-black text-md pb-2 font-serif font-semibold hover:text-yellow-600 cursor-pointer`}
              >
                Picardy App
              </li>
              <li
                className={`${euclid.variable}  text-black text-md pb-2 font-serif font-semibold hover:text-yellow-600 cursor-pointer`}
              >
                <a
                  href="https://picardy-nft-domain.vercel.app/buy-domains"
                  target="_blank"
                >
                  Picardy NFT Domains
                </a>
              </li>
            </ul>
          </div>

          <div className="p-5 mt-6">
            <ul>
              <p
                className={`${lemonMilk.variable} text-black font-sans font-bold text-xl pb-4`}
              >
                Company
              </p>
              <li
                className={`${euclid.variable}  text-black text-md pb-2 font-serif font-semibold hover:text-yellow-600 cursor-pointer`}
              >
                About Us
              </li>
              <li
                className={`${euclid.variable}  text-black text-md pb-2 font-serif font-semibold hover:text-yellow-600 cursor-pointer`}
              >
                Careers
              </li>
              <li
                className={`${euclid.variable}  text-black text-md pb-2 font-serif font-semibold hover:text-yellow-600 cursor-pointer`}
              >
                FAQs
              </li>
              <li
                className={`${euclid.variable}  text-black text-md pb-2 font-serif font-semibold hover:text-yellow-600 cursor-pointer`}
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-[110px] bg-claimFooter text-black font-[400] pb-12">
        <ul className="block gap-12 md:flex justify-center items-center">
          <li>© 2022 Picardy Protocol | Powered by Picardy</li>
          <li className="underline pt-6 md:pt-0 cursor-pointer">
            Privacy Policy
          </li>
        </ul>
      </div>
    </>
  );
};

export default ClaimFooter;
