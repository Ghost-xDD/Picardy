import React from 'react';
import { fluff } from '../public/assets';
import Image from 'next/image';
import Button from '../components/Button';
import localFont from '@next/font/local';

const euclid = localFont({
  src: './euclid-fonts/Euclid Circular A Regular.ttf',
  variable: '--font-euclid',
});

const Guide = () => {
  return (
    <div className="">
      {/* <div className='p-2 bg-gray-400 absolute w-[82%] bottom-20' /> */}
      <div className="flex justify-center">
        <Image src={fluff} className="" />
      </div>

      <div>
        <p
          className={`${euclid.variable} text-center mt-[80px] font-[400] text-lg font-serif`}
        >
          Get off chain royalty data on chain and choose to use{' '}
          <span className="font-bold">Chainlink keepers </span> to automate the
          royalty smart contracts or not. <br />
          <span className="font-bold py-3 text-guideYellow">
            Register Automation here
          </span>
        </p>
        <div className="justify-center flex mt-8">
          <Button props="Read Guide" />
        </div>
      </div>
    </div>
  );
};

export default Guide;
