import Image from 'next/image';
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

const Card = ({ image, title, content }) => {
  return (
    <div className=" lg:px-5 py-24 mt-20 lg:mt-0  bg-cardGrey rounded-xl shadow-2xl w-full   lg:w-[30%] h-[500px] flex flex-col items-center">
      <div className="text-center ">
        <Image src={image} className="w-[50px] md:w-[70px]" />
      </div>
      <div className="pb-16">
        <h1
          className={`${lemonMilk.variable} uppercase text-xl py-4 font-[500] font-sans`}
        >
          {title}
        </h1>
        <p
          className={`${euclid.variable} text-[#818182] text-[18px] px-6 font-serif`}
        >
          {content}
        </p>
      </div>
    </div>
  );
};

export default Card;
