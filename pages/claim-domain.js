import React from 'react';
import ClaimNav from '../components/ClaimNav';
import Head from 'next/head';
import MintHero from '../components/MintHero';
import Early from '../components/Early';
import ClaimFooter from '../components/ClaimFooter';
import Picardy from '../components/Picardy';

const Claim = () => {
  return (
    <>
      <Head>
        <title>Claim Domain | Picardy Protocol</title>
        <meta
          name="description"
          content="Claim your Picardy domain to be one of the genesis users of every dApp powered by Picardy
          Protocol. Earn rewards while doing so."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-footerBlack px-4 md:px-12 lg:px-24">
        <ClaimNav />
        <MintHero />
        <div className="pb-20">
          <Early />
          <Picardy />
        </div>
      </div>
      <ClaimFooter />
    </>
  );
};

export default Claim;
