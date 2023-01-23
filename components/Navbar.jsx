import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { close, menu, logo, picLogo } from '../public/assets';
import Button from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import NavModal from './NavModal';
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
    href: '/builders',
  },
  {
    name: 'Faq',
    href: '/faq',
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  const handleOnClose = () => setShowNav(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
      <Link href="/" className="flex items-center gap-2" passHref>
        <Image
          src={picLogo}
          alt="Logo"
          className="w-[100px] md:w-[120px] md:h-[50px]"
        />
        {/* <span className=" text-lg md:text-xl font-bold">Picardy</span> */}
      </Link>

      <ul className="list-none sm:flex hidden justify-center items-center flex-1">
        {navLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            scroll={false}
            className={`${
              euclid.variable
            } font-serif font-bold cursor-pointer text-[18px]  ${
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
        <Link
          href="/claim-domain"
          className={`${lemonMilk.variable} font-sans bg-[#F9CC16] rounded-lg p-2 text-black font-bold text-[16px] uppercase px-4`}
        >
          Claim Domain
        </Link>
      </div>

      {/* Mobile Menu */}

      <motion.div className="sm:hidden flex flex-1 justify-end items-center z-10">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[35px] h-[32px] object-contain  rounded-md"
          onClick={() => setShowNav(true)}
        />
        <NavModal onClose={handleOnClose} visible={showNav} />
      </motion.div>
    </nav>
  );
};

export default Navbar;
