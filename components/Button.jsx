import React from 'react';
import localFont from '@next/font/local';

const lemonMilk = localFont({
  src: './lemon-font/LemonMilkRegular-X3XE2.otf',
  variable: '--font-lemonmilk',
});

const euclid = localFont({
  src: './euclid-fonts/Euclid Circular A Regular.ttf',
  variable: '--font-euclid',
});

const Button = ({ props }) => {
  return (
    <>
      <button
        className={`${lemonMilk.variable} bg-[#F9CC16] text-[12px] md:text-lg rounded-lg p-2 uppercase text-black font-bold px-4 font-sans`}
      >
        {props}
      </button>
    </>
  );
};

export default Button;
