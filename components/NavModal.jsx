import { useState } from 'react';
import { close, menu, logo, picardyFoo, pineapple } from '../public/assets';
import Button from '../components/Button';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
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

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: "Builder's Den",
    href: 'https://picardy-protocol.gitbook.io/picardy-protocol-docs/builders-den/understanding-the-protocol',
  },
  {
    name: 'Faq',
    href: '/faq',
  },
  {
    name: 'Claim Domain',
    href: '/claim-domain',
  },
];

const NavModal = ({ visible, onClose }) => {
  if (!visible) return null;

  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  return (
    <>
      {' '}
      <div className="">
        <div className="bg-footerBlack fixed inset-0 flex justify-center items-center sidebar">
          <Link href="/" className="flex items-center gap-2" passHref>
            <Image
              src={picardyFoo}
              alt="Logo"
              className="w-[100px] absolute top-12 left-6 md:w-[160px] md:h-[50px]"
            />
          </Link>
          <Image
            src={close}
            className="w-[37px] absolute top-10 left-[310px] right-[100px]"
            onClick={onClose}
          />

          <div>
            <ul className="list-none mr-[200px] mb-24 ml-0 flex justify-end items-start flex-1 flex-col">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  scroll={true}
                  className={`${
                    lemonMilk.variable
                  } font-sans text-white uppercase font-normal cursor-pointer text-[16px]  ${
                    router.pathname == item.href
                      ? 'text-stone-200 font-semibold  border-b-4 border-guideYellow mt-6  transition-all duration-500'
                      : 'text-dimWhite mt-6 hover:opacity-80'
                  } `}
                >
                  {item.name}
                </Link>
              ))}
              {/* <p className="text-[16px] mt-6 uppercase text-white">
                Claim Domain
              </p> */}
              {/* <Button props="Claim Domain" /> */}
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`${euclid.variable} font-serif bg-[#Fef7dc] fixed top-[480px] left-0 w-full h-full mt-10`}
      >
        <div className="pl-6 mt-[40px] flex items-center gap-6">
          <div className="">
            <h3
              className={`${euclid.variable} font-serif text-black mt-4 pl-2 pb-4`}
            >
              Follow and join us
            </h3>
            <div className="flex gap-6 text-black pl-2">
              <BsGithub className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaDiscord className="text-2xl cursor-pointer hover:text-red-600" />
              <BsMedium className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </div>

          <div>
            <Image src={pineapple} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavModal;
