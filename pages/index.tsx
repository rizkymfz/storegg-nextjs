import type { NextPage } from 'next'
import { useEffect } from 'react'
import AOS from "aos";
import Navbar from '../components/organism/navbar';
import MainBanner from '../components/organism/mainbanner';
import TransactionStep from '../components/organism/transactionsteps';
import FeaturedGame from '../components/organism/FeaturedGame';
import Reached from '../components/organism/reached';
import Story from '../components/organism/story';
import Footer from '../components/organism/footer';

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
        <Navbar/>
        <MainBanner />
        <TransactionStep />
        <FeaturedGame />
        <Reached />
        <Story />
        <Footer />
    </>
  )
}

export default Home
