import React from 'react';
import { group } from '../public/assets';
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

const euclidLight = localFont({
  src: './euclid-fonts/Euclid Circular A Light.ttf',
  variable: '--font-euclidLight',
});

const Early = () => {
  return (
    <div className="bg-[#Fef7dc] mt-[80px] p-5 py-12 lg:p-16 flex items-center justify-between">
      <Image src={group} className="w-[150px]" alt="group" />

      <div className="mt-8 text-end">
        <h1
          className={`${lemonMilk.variable} font-sans text-xl lg:text-3xl uppercase font-[500]`}
        >
          Early Access for Community <br /> Members
        </h1>
        <p className={`${euclidLight.variable} font-mono mt-6 text-lg`}>
          Picardy Domains is brought to you by Picardy Protocol.
        </p>
      </div>
    </div>
  );
};

export default Early;
