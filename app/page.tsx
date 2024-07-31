'use client'
import { useState } from 'react'
import Join from './component/home/join/Join'
import Tech from './component/home/tech/Tech'
import About from './component/home/about/About'
import Event from './component/home/event/Event'
import Learn from './component/home/about/Learn'
import Offer from './component/home/offer/Offer'
import HomePage from './component/home/home/Home'
import Footer from './component/home/footer/Footer'
import Header from './component/home/header/Header'
import Review from './component/home/review/Review'
import Sponsor from './component/home/sponsor/Sponsor'
import ScrollToTop from './component/utilities/scroll-to-top/ScrollToTop'

const Home = () => {
  const [active, setActive] = useState('home')
  const handleActive = (link: string) => setActive(link)
  return (
    <>
      <Header active={active} handleActive={handleActive}/>
      <HomePage/>
      <About/>
      <Offer/>
      <Sponsor/>
      <Event/>
      <Join/>
      <Learn/>
      <Review/>
      <Tech/>
      <Footer active={active} handleActive={handleActive}/>
      <ScrollToTop/>
    </>
  )
}

export default Home