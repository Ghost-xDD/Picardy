import React from 'react';
import { cage, sphere, sphere1 } from '../public/assets';
import Button from '../components/Button';
import Image from 'next/image';
import localFont from '@next/font/local';

const lemonMilk = localFont({
  src: './lemon-font/LemonMilkRegular-X3XE2.otf',
  variable: '--font-lemonmilk',
});

const euclid = localFont({
  src: './euclid-fonts/Euclid Circular A Regular.ttf',
  variable: '--font-euclid',
});

const Explore = () => {
  return (
    <>
      <div className="flex items-center justify-between bg-faintYellow px-8 lg:px-24 py-24">
        <div>
          <h1
            className={`${lemonMilk.variable} font-sans text-[24px] sm:text-[33px] font-[500]`}
          >
            EXPLORE THE KEY <br /> FUNCTIONS OF{' '}
            <span className="bg-[#F9CC16]">
              {' '}
              PICARDY <br /> PROTOCOL{' '}
            </span>
          </h1>
          <p
            className={`${euclid.variable} font-serif py-4 text-[#818182] text-md sm:text-lg`}
          >
            Create solutions to sell project royalties <br /> as NFTs or ERC 21
            tokens, and generate <br /> tokens for brands & creators.
          </p>
          <Button props="Read Docs" />
        </div>

        <Image src={cage} className="w-[200px] lg:w-[200px]" />
      </div>

      <div className="flex items-center justify-between bg-faintYellow pb-20 ">
        <Image src={sphere} className="w-[200px] lg:w-[300px]" />

        <div className="mr-[40px]">
          <h1
            className={`${lemonMilk.variable} font-sans text-[24px] sm:text-[33px] font-[500] uppercase text-end`}
          >
            Take control of your <br /> royalties.
          </h1>
          <p
            className={`${euclid.variable} font-serif py-4 text-end text-[#818182] text-md sm:text-lg`}
          >
            Handle 100% of your royalties and <br /> raise funds with a
            percentage of it.
          </p>
        </div>
      </div>
    </>
  );
};

export default Explore;
