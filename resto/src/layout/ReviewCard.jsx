// eslint-disable-next-line no-unused-vars
import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className="w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div>
        <p className="text-lightText">
          Absolutely delightful! The flavors were incredible, and the service was top-notch. A must-visit!
          Fantastic dining experience! The ambiance was perfect, and the dishes were exquisite. Highly recommend
        </p>
      </div>
      <div className="flex flex-row justify-center items-center mt-4 gap-4">
        <img className="rounded-full w-20 h-20 object-cover" src={props.img} alt="Reviewer" />
        <h3 className="font-semibold">{props.name}</h3>
      </div>
    </div>
  )
}

export default ReviewCard
