import React from 'react';
import Image from 'next/image';
import { logo, picardy, picardyFoo } from '../public/assets';
import { FaTwitter, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { BsFillStarFill } from 'react-icons/bs';
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

              <p className={`${euclid.variable} font-serif text-white text-lg`}>
                Community tooling that improves the creator economy.
              </p>

              <div className="flex gap-6 pb-5 mt-4 text-white">
                <BsGithub className="text-2xl cursor-pointer hover:text-yellow-600" />
                <a href="https://twitter.com/picardyprotocol?t=YiIsHXtolLn_TT8CWEgzHQ&s=09">
                  <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                </a>
                <a
                  href="https://www.linkedin.com/company/picardyllc"
                  target="_blank"
                >
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                </a>
                <FaDiscord className="text-2xl cursor-pointer hover:text-red-600" />
                <a href="https://www.medium.com/@picardy" target="_blank">
                  <BsMedium className="text-2xl cursor-pointer hover:text-red-600" />
                </a>
              </div>
            </ul>
          </div>

          <div className="p-5">
            <ul>
              <p
                className={`${lemonMilk.variable} text-[#F0F4FE] font-sans font-normal text-xl pb-4`}
              >
                Learn More
              </p>
              <li
                className={`${euclid.variable}  text-white text-md pb-2 font-serif  hover:text-yellow-600 cursor-pointer`}
              >
                Builder's Den
              </li>
              <li
                className={`${euclid.variable}  text-white text-md pb-2 font-serif  hover:text-yellow-600 cursor-pointer`}
              >
                Docs
              </li>
              <li
                className={`${euclid.variable}  text-white text-md pb-2 font-serif  hover:text-yellow-600 cursor-pointer`}
              >
                FAQs
              </li>
              <li
                className={`${euclid.variable}  text-white text-md pb-2 font-serif  hover:text-yellow-600 cursor-pointer flex items-center gap-2`}
              >
                <span>Claim Domain</span>
                <span>
                  <BsFillStarFill className="text-yellow-600" />
                </span>
              </li>
            </ul>
          </div>
          <div className="hidden lg:block p-5">
            <ul>
              <p
                className={`${lemonMilk.variable} font-sans text-[#F0F4FE]  text-xl pb-4`}
              >
                Company
              </p>
              <li
                className={`${euclid.variable} text-white font-serif text-md pb-2  hover:text-yellow-600 cursor-pointer`}
              >
                About Us
              </li>
              <li
                className={`${euclid.variable} font-serif text-md pb-2 text-yellow-600 hover:text-yellow-600 cursor-pointer`}
              >
                Join Our Team
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-[110px] bg-footerBlack text-white pb-12">
        <ul className="block gap-10 md:flex  items-center">
          <li className={`${euclid.variable} font-serif`}>
            © 2022 Picardy Protocol | Powered by Picardy
          </li>
          <li
            className={`${euclid.variable} font-serif underline pt-6 md:pt-0`}
          >
            Privacy Policy
          </li>
          {/*<li className="underline pt-6 md:pt-0">Terms of Service</li>
          <li className="underline pt-6 md:pt-0">Cookies Settings</li> */}
        </ul>
      </div>
    </>
  );
};

export default Footer;
