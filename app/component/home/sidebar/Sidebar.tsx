import React from 'react'
import { headerLink } from '../header/headerData'
import './_sidebar.scss'

const Sidebar = ({ active, handleActive, toggleSidebar } : { active: string, handleActive: (link: string)=>void, toggleSidebar: ()=>void }) => {
  const toggle = (link: string) => {
    handleActive(link)
    toggleSidebar()
  }
  return (
    <div className='sidebar'>
      <div className='content'>
        <div className='link'>
          {
            headerLink.map((link, i) => (
              <span key={i} onClick={() => toggle(link)} className={`${active == link && 'active'}`}>{link}</span>
            ))
          }
        </div>
      </div>
      <div className='transparent' onClick={toggleSidebar}></div>
    </div>
  )
}

export default Sidebar