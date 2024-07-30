import React from 'react'
import Image from 'next/image'
import './_about.scss'

const Learn = () => {
  return (
    <div className='about'>
      <div className='video'>
        <Image src='/images/about/founders1.png' alt='img' width={300} height={300} className='founders1'/>
        <Image src='/images/about/play.svg' alt='img' width={50} height={50} className='play'/>
      </div>
      <div className='content'>
      <p className='more'>At Founder&#39;s Friday, Every Friday Is a Learning Experience!</p>
        <div className='desc'>
          <p>Join us in our mission to transform ideas into impact and shape the future of Abuja&#39;s startup landscape.</p>
        </div>
        <div className='buttons'>
          <button className='register'>
            Register
            <Image src='/images/about/arrow-right.svg' alt='logo' width={20} height={20}/>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Learn