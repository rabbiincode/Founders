import React from 'react'
import Image from 'next/image'
import '../tech/_tech.scss'

const Join = () => {
  return (
    <div className='tech'>
      <p className='title title1'>Register And Be Part of Our Community</p>
      <p className='desc'>Join our community of over 1000+ founders, developers, and tech junkies in general. Be inspired by people who live to inspire!</p>
      <button>
        Register Now
        <Image src='/images/header/arrow-right.svg' alt='img' width={30} height={30}/>
      </button>
    </div>
  )
}

export default Join