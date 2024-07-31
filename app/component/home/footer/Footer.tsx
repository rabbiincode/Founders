import React from 'react'
import Image from 'next/image'
import { socialIcons } from './footerData'
import { headerLink } from '../header/headerData'
import './_footer.scss'

const Footer = ({ active, handleActive } : { active: string, handleActive: (link: string)=>void }) => {
  return (
    <div className='footer'>
      <div className='social'>
        {socialIcons.map((social, i) => <Image key={i} src={social.image} alt='social' width={30} height={30}/>)}
      </div>
      <div className='link'>
        {
          headerLink.map((link, i) => (
            <span key={i} onClick={() => handleActive(link)} className={`${active == link && 'active'}`}>{link}</span>
          ))
        }
      </div>
    </div>
  )
}

export default Footer