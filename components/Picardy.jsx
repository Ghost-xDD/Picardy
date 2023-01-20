import React from 'react';
import Button from './Button';
import localFont from '@next/font/local';

const lemonMilk = localFont({
  src: './lemon-font/LemonMilkRegular-X3XE2.otf',
  variable: '--font-lemonmilk',
});

const euclid = localFont({
  src: './euclid-fonts/Euclid Circular A Regular.ttf',
  variable: '--font-euclid',
});

const Picardy = () => {
  return (
    <div className="bg-claimYellow mt-[80px] p-5 py-8 lg:p-12 flex items-center justify-between">
      {/* <Image src={group} className="w-[150px]" /> */}

      <div className="mt-8 text-center">
        <h1
          className={`${lemonMilk.variable}  font-sans text-xl lg:text-3xl uppercase font-[500]`}
        >
          PICARDY NFT DOMAINS
        </h1>
        <p className={`${euclid.variable} font-serif mt-6 text-lg`}>
          Picardy NFT Domains customizes and creates top level domains for
          communities and DAOs. Create your top level domains (like{' '}
          <span className="font-bold">.ape, .lens, .vibe</span> ) now.
        </p>
        <div className="mt-8">
          <Button props="Customize Domain" />
        </div>
      </div>
    </div>
  );
};

export default Picardy;
