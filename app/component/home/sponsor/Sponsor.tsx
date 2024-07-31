import React from 'react'
import Image from 'next/image'
import { eventsData } from './sponsorData'
import './_sponsor.scss'

const Sponsor = () => {
  return (
    <div className='sponsor'>
      <p className='title'>Sponsor The Next Friday</p>
      <p className='title title1'>Why Sponsor Founders Friday?</p>
      <div className='content'>
        <div className='events'>
          {
            eventsData.map((event, i) => (
              <div key={i} className={`circle ${!event.background && 'light'}`}>
                <h1>{event.title}</h1>
                <span>{event.desc}</span>
              </div>
            ))
          }
        </div>
        <div className='impact'>
          <p className='title title2'>How To Sponsor</p>
          <p className='desc'>Ready to Make an Impact?</p>
          <span>
            Fill out the form below or contact us at [contact email/phone number]
            to learn more about how you can sponsor the next Founders Friday
          </span>
          <form>
            <div className='box'>
              <div className='input'>
                <label>Name</label>
                <input type='text' placeholder='Full name'/>
              </div>
              <div className='input'>
                <label>Company <small>(optional)</small></label>
                <input type='text' placeholder='Company name'/>
              </div>
              <div className='input'>
                <label>Email address</label>
                <input type='text' placeholder='Email Address'/>
              </div>
              <div className='input'>
                <label>Phone</label>
                <input type='text' placeholder='Phone number'/>
              </div>
            </div>
            <button type='button'>
              Sponsor
              <Image src='/images/about/arrow-right.svg' alt='img' width={30} height={30}/>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Sponsor