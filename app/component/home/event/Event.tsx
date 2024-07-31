import React from 'react'
import Image from 'next/image'
import './_event.scss'

const Event = () => {
  return (
    <div className='event'>
      <div className='content'>
        <p className='title'>Founders Friday is coming to</p>
        <p className='heading'>Kaduna</p>
        <p className='desc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem,
          facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo
          suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
        <button>
          Register Now
          <Image src='/images/header/arrow-right.svg' alt='img' width={30} height={30}/>
        </button>
      </div>
      <Image src='/images/header/logo.svg' alt='logo' width={300} height={300} className='logo'/>
    </div>
  )
}

export default Event