/* eslint-disable no-unused-vars */
import React from 'react';
import img1 from "../assets/img/img1.webp";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.webp";
import img4 from "../assets/img/img4.webp";
import img5 from "../assets/img/img5.webp";
import img6 from "../assets/img/img6.avif";
import Dishcard from '../layout/Dishcard';

const Dishes = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className="flex flex-wrap gap-8 justify-center">
        <Dishcard img={img1} title="Beef Wellington" price="540/-" />
        <Dishcard img={img2} title="Lobster Bisque" price="310/-" />
        <Dishcard img={img3} title="Spicy Dragon Noodles" price="210/-" />
        <Dishcard img={img4} title="Four Cheese Fiesta" price="680/-" />
        <Dishcard img={img5} title="Caramel Pecan Bliss" price="420/-" />
        <Dishcard img={img6} title="Crispy Duck with Plum Sauce" price="630/-" />
      </div>
    </div>
  );
};

export default Dishes;
