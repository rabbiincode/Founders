import React, { useState } from 'react'
import Image from 'next/image'
import { eventsData } from './sponsorData'
import { useForm } from 'react-hook-form'
import { Sponsor as SponsorForm } from '@/app/interfaces/sponsor'
import { emailPattern, phoneNumberPattern } from '../../utilities/validate/validate'
import './_sponsor.scss'

const Sponsor = () => {
  const [send, setSend] = useState(false)
  const {formState: {errors}, handleSubmit, register: sponsor} = useForm<SponsorForm>()
  const handleSponsor = (input: SponsorForm) => {}
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
          <form onSubmit={handleSubmit(handleSponsor)}>
            <div className='box'>
              <div className='input'>
                <label>Name</label>
                <input type='text' placeholder='Full name' {...sponsor('name', {required: 'Full name required'})}/>
                <p className={`hide-error ${errors.name && 'show-error'}`}>{errors.name ? errors.name?.message : 'required'}</p>
              </div>
              <div className='input'>
                <label>Company <small>(optional)</small></label>
                <input type='text' placeholder='Company name' {...sponsor('company')}/>
                <p className='hide-error'>optional</p>
              </div>
              <div className='input'>
                <label>Email address</label>
                <input type='text' placeholder='Email Address' {...sponsor('email', {required: 'Email address required', pattern: {value: emailPattern, message: 'Email address invalid'}})}/>
                <p className={`hide-error ${errors.email && 'show-error'}`}>{errors.email ? errors.email?.message : 'required'}</p>
              </div>
              <div className='input'>
                <label>Phone</label>
                <input type='text' placeholder='Phone number' {...sponsor('phoneNumber', {required: 'Phone number required', pattern: {value: phoneNumberPattern, message: 'Phone number not valid'}})}/>
                <p className={`hide-error ${errors.phoneNumber && 'show-error'}`}>{errors.phoneNumber ?errors.phoneNumber?.message : 'required'}</p>
              </div>
            </div>
            <button type='submit'>
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