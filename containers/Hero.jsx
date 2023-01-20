import React from 'react';
import Button from '../components/Button';
import { firstHero, secondHero, quote } from '../public/assets';
import Image from 'next/image';
import { motion } from 'framer-motion';
import localFont from '@next/font/local';

const lemonMilk = localFont({
  src: './lemon-font/LemonMilkRegular-X3XE2.otf',
  variable: '--font-lemonmilk',
});

const euclid = localFont({
  src: './euclid-fonts/Euclid Circular A Regular.ttf',
  variable: '--font-euclid',
});

let easeing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const fadeInUp = {
  initial: {
    y: -60,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: easeing,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.5,
      ease: easeing,
    },
  },
};

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const firstName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const lastName = {
  initial: {
    y: -20,
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.04,
      staggerDirection: 1,
    },
  },
};

const letter = {
  initial: {
    y: 400,
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const btnGroup = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.6, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};
const star = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.8, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const header = {
  initial: {
    y: -60,
    opacity: 0,
    transition: { duration: 0.05, ease: easeing },
  },
  animate: {
    y: 0,
    opacity: 1,
    animation: {
      duration: 0.6,
      ease: easeing,
    },
  },
};

const Hero = () => {
  return (
    <>
      <div className="text-center">
        <motion.div
          className="pt-12 md:pt-24"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: easeing }}
        >
          <h1
            className={`${lemonMilk.variable} text-[#020304] text-[38px] font-[500] uppercase w-full font-sans`}
          >
            Decentralized Royalty sale for music <br /> artistes & creators.
          </h1>
          <p
            className={`${euclid.variable} py-8 text-[#818182] text-[18px] font-serif`}
          >
            suite of smart contracts that improve the creator economy
          </p>
        </motion.div>

        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button props="Builder's Den" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="text-[#F9CC16] uppercase font-bold text-[12px] md:text-lg">
            Join Discord
          </button>
        </motion.div>
      </div>

      <div className="flex  justify-center mt-48">
        {/* <Image src={firstHero} className="absolute left-[300px]" />
        <div className="p-[5px] bg-black" />
        <Image src={secondHero} className="absolute pt-[120px] right-[300px]" /> */}
        <Image src={quote} />
      </div>
    </>
  );
};

export default Hero;
