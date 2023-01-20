import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../containers/Hero';
import Build from '../containers/Build';
import Explore from '../containers/Explore';
import Guide from '../containers/Guide';
import Nav2 from '../components/Nav2';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Picardy Protocol</title>
        <meta
          name="description"
          content="Decentralized royalty sale FOR MUSIC ARTISTES & CREATORS."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#FFFFFF] px-4 md:px-12 lg:px-24">
        <Navbar />
      </div>
      <div className=" p-[1px] bg-[#666]" />
      <div className="bg-[#FFFFFF] px-4 md:px-24 ">
        <Hero />
        <div>
          <Build />
        </div>
        <div className="mt-[140px]">
          <Explore />
        </div>
        <Guide />
      </div>
      <Footer />
    </>
  );
}
