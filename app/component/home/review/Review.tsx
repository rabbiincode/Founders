import React, { useState } from 'react'
import Image from 'next/image'
import { reviews } from './reviewData'
import './_review.scss'

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const next = () => setCurrentIndex((currentIndex + 3) % reviews.length)
  const prev = () => setCurrentIndex((currentIndex - 3 + reviews.length) % reviews.length)
  const showReviews = () => {
    return [
      reviews[currentIndex % reviews.length],
      reviews[(currentIndex + 1) % reviews.length],
      reviews[(currentIndex + 2) % reviews.length],
    ]
  }

  return (
    <div className='review'>
      <div className='heading'>
        <div className='title'>
          <span>What Do Our Attendees Have To Say?</span>
          <div className='arrow'>
            <Image src='/images/review/arrow-left.svg' alt='img' width={30} height={30} onClick={() => prev()} className={`left ${currentIndex < 3 && 'hides'}`}/>
            <Image src='/images/review/arrow-right.svg' alt='img' width={30} height={30} onClick={() => next()} className={`${currentIndex < reviews.length && 'hides'}`}/>
          </div>
        </div>
        <span className='desc'>We&#39;ll See For Yourself!</span>
      </div>
      <div className='reviews'>
        <div className='scroll'>
          {
            showReviews().map((review, i) => (
              <div key={i} className='content'>
                <Image src={review.image} alt='social' width={70} height={70}/>
                <p className='name'>{review.name}</p>
                <p>{review.review}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Review