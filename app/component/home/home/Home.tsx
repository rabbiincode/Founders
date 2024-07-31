import React from 'react'
import Image from 'next/image'
import './_home.scss'

const HomePage = () => {
  const logo = ['logo1', 'logo2', 'logo3', 'logo4', 'logo5']
  return (
    <div className='home'>
      <div className='content'>
        <small>Join our premier monthly meetup for startup founders and tech visionaries</small>
        <p className='title'>Connect, Collaborate, Innovate!</p>
        <p className='desc'>
          Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem.
          Whether you&#39;re a seasoned entrepreneur or just starting your journey, Founder&#39;s Friday is your
          launchpad for new ideas,valuable connections, and game-changing opportunities.
        </p>
        <button>
          Register For Our Next Event
          <Image src='/images/footer/double-arrow.svg' alt='img' width={30} height={30}/>
        </button>
        <small className='meet'>Join Us for our next meetup on the 26th of July 2024</small>
        <div className='logos'>
          {logo.map((image, i) => <Image key={i} src={`/images/home/${image}.png `} alt='logo' width={150} height={150}/>)}
        </div>
        <div className='collaborate'>
          Become a collaborator today
          <Image src='/images/home/send.svg' alt='img' width={30} height={30}/>
        </div>
      </div>
      <div className='images'>
        <div className='image1'>
          <Image src='/images/home/img1.png' alt='logo' width={200} height={200} className='img1'/>
          <Image src='/images/home/img2.png' alt='logo' width={200} height={200} className='img2'/>
        </div>
        <div className='image2'>
          <Image src='/images/home/img3.png' alt='logo' width={150} height={150} className='img3'/>
          <Image src='/images/home/img4.png' alt='logo' width={70} height={70} className='img4'/>
        </div>
      </div>
    </div>
  )
}

export default HomePage