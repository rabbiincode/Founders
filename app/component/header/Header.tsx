import React, { useState } from 'react'
import Image from 'next/image'
import Sidebar from '../sidebar/Sidebar'
import { headerLink } from './headerData'
import './_header.scss'

const Header = ({ active, handleActive } : { active: string, handleActive: (link: string)=>void }) => {
  const [sidebar, setSidebar] = useState(false)
  const toggleSidebar = () => setSidebar(!sidebar)
  return (
    <>
      <div className='header'>
        <div className='logo'>
          <Image src='/images/header/logo.svg' alt='logo' width={70} height={70}/>
          <span>Founder’s Friday</span>
        </div>
        <div className='links'>
          <div className='link'>
            {
              headerLink.map((link, i) => (
                <span key={i} onClick={() => handleActive(link)} className={`${active == link && 'active'}`}>{link}</span>
              ))
            }
          </div>
          <button>
            Register
            <Image src='/images/header/arrow-right.svg' alt='logo' width={20} height={20}/>
          </button>
        </div>
        <Image src='/images/header/menu.svg' alt='logo' width={30} height={30} onClick={toggleSidebar} className='menu'/>
      </div>
      <div className={`hide ${sidebar && 'show'}`}>
        <Sidebar active={active} handleActive={handleActive} toggleSidebar={toggleSidebar}/>
      </div>
    </>
  )
}

export default Header