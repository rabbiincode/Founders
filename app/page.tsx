'use client'
import { useState } from "react"
import Footer from "./component/footer/Footer"
import Header from "./component/header/Header"
import About from "./component/about/About"


const Home = () => {
  const [active, setActive] = useState('home')
  const handleActive = (link: string) => setActive(link)
  return (
    <>
      <Header active={active} handleActive={handleActive}/>
      <About/>
      <Footer active={active} handleActive={handleActive}/>
    </>
  )
}
export default Home
