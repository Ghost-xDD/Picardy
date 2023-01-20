import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { close, menu, logo } from '../public/assets';
import Button from '../components/Button';
import {motion, AnimatePresence} from "framer-motion"

const navLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: "Builder's Den",
    href: '/builders',
  },
  {
    name: 'Faq',
    href: '/faq',
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const item={
    exit:{
      opacity:0,
      height:0,
      transition:{
        ease:"easeInOut",
        duration:0.3,
        delay:1.2
      }
    }
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <Link href="/" className="flex items-center gap-2" passHref>
        <Image
          src={logo}
          alt="Logo"
          className="w-[100px] md:w-[160px] md:h-[50px]"
        />
        {/* <span className=" text-lg md:text-xl font-bold">Picardy</span> */}
      </Link>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            scroll={false}
            className={`font-bold cursor-pointer text-[18px]  ${
              router.pathname == item.href
                ? 'text-stone-700 font-semibold   p-1 px-6 rounded-xl transition-all duration-500'
                : 'text-dimWhite px-6 hover:opacity-80'
            } `}
          >
            {item.name}
          </Link>
        ))}
      </ul>

      <div className="hidden md:block">
        <a
          href="https://picardy-nft-domain.vercel.app/buy-domains"
          target="_blank"
          className="bg-[#F9CC16] rounded-lg p-2 text-black font-bold text-lg uppercase px-4"
        >
          Claim Domain
        </a>
      </div>

      {/* Mobile Menu */}

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[35px] h-[32px] object-contain  rounded-md"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? 'hidden' : 'flex'
          } p-6 bg-[#1E1E1E] text-white absolute top-[60px] right-0 mx- my-2 w-full h-full sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                scroll={false}
                className={`font-poppins uppercase font-normal cursor-pointer text-[16px]  ${
                  router.pathname == item.href
                    ? 'text-stone-200 font-semibold  border-b-4 border-guideYellow mt-6 p-1 px-6  transition-all duration-500'
                    : 'text-dimWhite px-6 mt-6 hover:opacity-80'
                } `}
              >
                {item.name}
              </Link>
            ))}
            <p className="px-6 mt-6 uppercase">Claim Domain</p>
            {/* <Button props="Claim Domain" /> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
