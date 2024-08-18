/* eslint-disable no-unused-vars */
import React from 'react';
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from '../layout/Button';

const Dishcard = (props) => {
  return (
    <div className='w-full lg:w-1/4 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg m-4'>
      <img src={props.img} alt="img" className='w-full h-48 object-cover rounded-md' />
      <div className="space-y-8 pt-4">
        <h3 className="font-semibold text-center text-xl">{props.title}</h3>
        <div className="flex flex-row justify-center">
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarHalf />
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}</h3>
          <Button title="Buy Now" />
        </div>
      </div>
    </div>
  );
}

export default Dishcard;
