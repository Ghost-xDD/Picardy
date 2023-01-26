import React from 'react';
import { fluff } from '../public/assets';
import Image from 'next/image';
import Button from '../components/Button';
import localFont from '@next/font/local';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

const euclid = localFont({
  src: './euclid-fonts/Euclid Circular A Regular.ttf',
  variable: '--font-euclid',
});

const Guide = () => {
  return (
    <div className="">
      {/* <div className='p-2 bg-gray-400 absolute w-[82%] bottom-20' /> */}
      <AnimationOnScroll animateIn="animate__rollIn" animateOnce="true">
        <div className="flex justify-center">
          <Image src={fluff} className="w-[100px] md:w-[150px]" />
        </div>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <div>
          <p
            className={`${euclid.variable} text-center mt-[80px] font-[400] text-lg font-serif`}
          >
            Get off chain royalty data on chain and choose to use{' '}
            <span className="font-bold">Chainlink keepers </span> to automate
            the royalty smart contracts or not. <br />
            <a
              className="font-bold py-3 text-guideYellow"
              href="https://picardy-protocol.gitbook.io/picardy-protocol-docs/automation/register-automation"
              target="_blank"
            >
              Register Automation here
            </a>
          </p>
          <div className="justify-center flex mt-8">
            <Button props="Read Guide" />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Guide;
