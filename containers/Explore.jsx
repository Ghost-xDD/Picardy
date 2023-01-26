import React from 'react';
import { cage, sphere, sphere1, sphere2 } from '../public/assets';
import Button from '../components/Button';
import Image from 'next/image';
import localFont from '@next/font/local';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css/animate.min.css';

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
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
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
              Create solutions to sell project royalties <br /> as NFTs or ERC
              21 tokens, and generate <br /> tokens for brands & creators.
            </p>
            <Button
              props="Read Docs"
              links="https://picardy-protocol.gitbook.io/picardy-protocol-docs/"
            />
          </div>
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true">
          <Image src={cage} className="w-[200px] lg:w-[200px]" />
        </AnimationOnScroll>
      </div>

      <div className="flex items-center justify-between bg-faintYellow pb-20 ">
        <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce="true">
          <Image
            src={sphere2}
            className="w-[220px] md:w-[300px] lg:w-[300px]"
          />
        </AnimationOnScroll>

        <AnimationOnScroll animateIn="animate__fadeInRight" animateOnce="true">
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
        </AnimationOnScroll>
      </div>
    </>
  );
};

export default Explore;
