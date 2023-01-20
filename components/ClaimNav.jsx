import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { close, menu, logo, picardyFoo, darkMenu } from '../public/assets';
import Button from '../components/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount, useDisconnect } from 'wagmi';

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

const ClaimNav = () => {
  const [toggle, setToggle] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const router = useRouter();

  const { data: account } = useAccount();
  const { disconnect } = useDisconnect();

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
          src={picardyFoo}
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
            className={`${
              euclid.variable
            } font-serif font-bold cursor-pointer text-[18px]  ${
              router.pathname == item.href
                ? 'text-[#FFFFFF] font-semibold   p-1 px-6 rounded-xl transition-all duration-500'
                : 'text-[#FFFFFF] px-6 hover:opacity-80'
            } `}
          >
            {item.name}
          </Link>
        ))}
      </ul>

      <div className="hidden md:block">
        <ConnectButton showBalance={false} />
      </div>

      {/* Mobile Menu */}

      <motion.div className="sm:hidden flex flex-1 justify-end items-center z-10">
        <Image
          src={toggle ? close : darkMenu}
          alt="menu"
          className="w-[35px] h-[32px] object-contain  rounded-md"
          onClick={() => setShowNav(true)}
        />
        <NavModal onClose={handleOnClose} visible={showNav} />
      </motion.div>
    </nav>
  );
};

export default ClaimNav;
