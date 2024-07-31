import React from 'react'
import Image from 'next/image'
import './_tech.scss'

const Tech = () => {
  return (
    <div className='tech'>
      <div className='logo'>
        <Image src='/images/header/logo.svg' alt='logo' width={70} height={70}/>
        <div>
          <p>Founder’s</p>
          <p>Friday</p>
        </div>
      </div>
      <p className='title'>Want To Be A Part Of Abuja’s Biggest Tech Community?</p>
      <button>
        Register For Our Next Event
        <Image src='/images/footer/double-arrow.svg' alt='logo' width={30} height={30}/>
      </button>
    </div>
  )
}

export default Tech