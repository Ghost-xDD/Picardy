import React from 'react';
import Image from 'next/image';
import { logo, picardy, picardyFoo } from '../public/assets';
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

const Footer = () => {
  return (
    <>
      <div className="mt-20">
        <div className="bg-footerBlack h-1/2 w-full flex md:flex-row flex-col justify-around items-start px-18 pt-20 ">
          <div className="p-5">
            <ul>
              <span className="flex items-center gap-3 pb-6">
                <Image
                  src={picardyFoo}
                  className="text-gray-800 font-bold text-3xl "
                />
              </span>

              <p
                className={`${euclid.variable} font-serif text-gray-300 text-lg`}
              >
                Community tooling that improves the creator economy.
              </p>

              <div className="flex gap-6 pb-5 mt-4 text-white">
                <BsGithub className="text-2xl cursor-pointer hover:text-yellow-600" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaDiscord className="text-2xl cursor-pointer hover:text-red-600" />
                <BsMedium className="text-2xl cursor-pointer hover:text-red-600" />
              </div>
            </ul>
          </div>

          <div className="p-5">
            <ul>
              <p
                className={`${lemonMilk.variable} text-[#F0F4FE] font-sans font-bold text-xl pb-4`}
              >
                Other Tools
              </p>
              <li
                className={`${euclid.variable}  text-white text-md pb-2 font-serif font-semibold hover:text-yellow-600 cursor-pointer`}
              >
                Picardy App
              </li>
              <li
                className={`${euclid.variable} font-serif text-white text-md pb-2 font-semibold hover:text-yellow-600 cursor-pointer`}
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
          <div className="p-5">
            <ul>
              <p
                className={`${lemonMilk.variable} font-sans text-[#F0F4FE] font-bold text-xl pb-4`}
              >
                Company
              </p>
              <li
                className={`${euclid.variable} text-white font-serif text-md pb-2 font-semibold hover:text-yellow-600 cursor-pointer`}
              >
                About Us
              </li>
              <li
                className={`${euclid.variable} text-white font-serif text-md pb-2 font-semibold hover:text-yellow-600 cursor-pointer`}
              >
                Careers
              </li>
              <li
                className={`${euclid.variable} text-white font-serif text-md pb-2 font-semibold hover:text-yellow-600 cursor-pointer`}
              >
                FAQs
              </li>
              <li
                className={`${euclid.variable} text-white font-serif text-md pb-2 font-semibold hover:text-yellow-600 cursor-pointer`}
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-[110px] bg-footerBlack text-gray-500 pb-12">
        <ul className="block gap-12 md:flex justify-between items-center">
          <li>© 2022 Picardy Protocol | Powered by Picardy</li>
          {/* <li className="underline pt-6 md:pt-0">Privacy Policy</li>
          <li className="underline pt-6 md:pt-0">Terms of Service</li>
          <li className="underline pt-6 md:pt-0">Cookies Settings</li> */}
        </ul>
      </div>
    </>
  );
};

export default Footer;
