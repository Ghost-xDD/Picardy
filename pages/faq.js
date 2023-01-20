import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { faqQuestions } from '../helper/data';
import FAQ from '../components/FAQ';
import Button from '../components/Button';
import localFont from '@next/font/local';

const lemonMilk = localFont({
  src: '../containers/lemon-font/LemonMilkRegular-X3XE2.otf',
  variable: '--font-lemonmilk',
});

const euclid = localFont({
  src: '../containers/euclid-fonts/Euclid Circular A Regular.ttf',
  variable: '--font-euclid',
});

const faq = () => {
  return (
    <>
      <Head>
        <title>FAQ | Picardy Protocol</title>
        <meta name="description" content="Frequently asked Questions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#FFFFFF] px-4 md:px-12 lg:px-24">
        <Navbar />
      </div>

      <div className="px-4  md:px-24 pb-12">
        <h1 className={`${lemonMilk.variable} text-2xl text-center font-bold mt-8 font-sans`}>
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <p className={`${euclid.variable} font-serif text-[#818182] text-lg text-center mt-2`}>
          Here are questions we get asked the most. Don’t see what you’re
          looking for? Reach out to us anytime on our Discord, Twitter or email.
        </p>

        {faqQuestions.map((faq) => (
          <FAQ key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>

      <div className="mx-8 md:mx-24">
        <div className=" mt-16 bg-faintYellow rounded-sm p-5">
          <div className="text-center mt-[80px] font-[400] text-lg">
            Get off chain royalty data on chain and choose to use{' '}
            <span className="font-bold">Chainlink keepers </span> to automate
            the royalty smart contracts or not. <br />
            <p className="font-bold py-6 ">Register Automation here</p>
          </div>
          <div className="justify-center flex mt-4">
            <Button props="Read Guide" />
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default faq;
