'use client'
import { useState } from 'react'
import Tech from './component/tech/Tech'
import About from './component/about/About'
import Learn from './component/about/Learn'
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Review from './component/review/Review'

const Home = () => {
  const [active, setActive] = useState('home')
  const handleActive = (link: string) => setActive(link)
  return (
    <>
      <Header active={active} handleActive={handleActive}/>
      <About/>
      <Learn/>
      <Review/>
      <Tech/>
      <Footer active={active} handleActive={handleActive}/>
    </>
  )
}
export default Home
