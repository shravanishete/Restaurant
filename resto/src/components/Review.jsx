// eslint-disable-next-line no-unused-vars
import React from 'react'
import img1 from '../assets/img/pic1.jpg'
import img2 from '../assets/img/pic2.jpeg'
import img3 from '../assets/img/pic3.png'
import ReviewCard from '../layout/ReviewCard'

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Sophia Azura" />
        <ReviewCard img={img2} name="John Deo" />
        <ReviewCard img={img3} name="Victoria Zoe" />
      </div>
    </div>
  )
}

export default Review
