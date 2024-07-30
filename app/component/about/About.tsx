import React from 'react'
import Image from 'next/image'
import './_about.scss'

const About = () => {
  return (
    <div className='about'>
      <Image src='/images/about/founders.png' alt='img' width={300} height={300} className='founders'/>
      <div className='content'>
      <div className='line'></div>
        <p className='title'>Who Are We?</p>
        <div className='desc'>
          <p>
            Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent,
            high-quality networking platform where founders, innovators, and tech enthusiasts could connect,
            share ideas, and foster collaboration.
         </p>
          <p>
            Join us at the next Founder&#39;s Friday and be part of Abuja&#39;s most dynamic startup community.
            Together, we&#39;re not just sharing ideas—we&#39;re shaping the future of tech in our city.
          </p>
        </div>
        <div className='buttons'>
          <button className='register'>
            Register
            <Image src='/images/about/arrow-right.svg' alt='logo' width={20} height={20}/>
          </button>
          <button>
            Donate
            <Image src='/images/about/money.svg' alt='logo' width={20} height={20}/>
          </button>
        </div>
        <p className='more'>Founder&#39;s Friday is more than just a meetup — it&#39;s a movement.</p>
      </div>
    </div>
  )
}

export default About