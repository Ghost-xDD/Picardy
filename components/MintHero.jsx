import React from 'react';
import { mintHero } from '../public/assets';
import Image from 'next/image';
import Minter from '../components/Minter';
import localFont from '@next/font/local';

const lemonMilk = localFont({
  src: './lemon-font/LemonMilkRegular-X3XE2.otf',
  variable: '--font-lemonmilk',
});

const euclid = localFont({
  src: './euclid-fonts/Euclid Circular A Regular.ttf',
  variable: '--font-euclid',
});

const MintHero = () => {
  return (
    <div className="mt-16">
      <div className="w-full text-center">
        <h1
          className={`${lemonMilk.variable}  selection:text-center text-gradient font-sans font-semibold ss:text-[58px] text-[50px] flex-wrap text-white sm:w-full ss:leading-[100.8px] leading-[75px] uppercase animate-pulse`}
        >
          Claim Your Domain
        </h1>
      </div>

      <p className={`${euclid.variable} font-serif text-[#818182] text-center text-[18px]`}>
        Claim your Picardy domain to be one of the genesis users of every dApp
        powered by Picardy <br /> Protocol. Earn rewards while doing so.
      </p>

      <div className="flex justify-center mt-16">
        <Image src={mintHero} alt="Mint Hero" />
      </div>

      <Minter />
    </div>
  );
};

export default MintHero;
