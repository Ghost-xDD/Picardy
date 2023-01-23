import React from 'react';
import Card from '../components/Card';
import { contracts, payments, infrastructure } from '../public/assets';
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

const Build = () => {
  return (
    <div className="text-center mt-24">
      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <h1
          className={`${lemonMilk.variable} text-[28px] sm:text-[34px] font-sans  uppercase font-[500]`}
        >
          Buidl solutions with our smart contract library
        </h1>

        <p
          className={`${euclid.variable} text-[#818182] text-lg mt-3 mb-24 font-serif`}
        >
          Create solutions for creators and artistes using the royalty and token
          smart contracts in our protocol.
        </p>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce="true">
        <div className="block lg:flex gap-8 justify-center sm:px-40 px-8 lg:px-2">
          <Card
            image={contracts}
            title="SUITE OF SMART CONTRACTS"
            content="A library of smart contracts, that improves fundraising & community growth for independent music artists or creators. 
"
          />
          <Card
            image={payments}
            title="AUTOMATED ROYALTY PAYMENTS"
            content="Provides automated royalty contracts for artistes, creators and anyone who wants to sell royalties for their projects.
"
          />
          <Card
            image={infrastructure}
            title="PLUG IN & Play
          Infrastructure"
            content="Easily add any smart contract to an already existing platform and dApp.
"
          />
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Build;
