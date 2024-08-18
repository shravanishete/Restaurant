// eslint-disable-next-line no-unused-vars
import React from 'react'
import Dishcard from '../layout/Dishcard'
import img1 from '../assets/img/menu1.png'
import img2 from '../assets/img/menu2.jpeg'
import img3 from '../assets/img/menu3.avif'
const Menu = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
        <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">Premium menu</h1>
        <div className=" flex flex-wrap gap-8 justify-center">
            <Dishcard img={img1} title="Vitello Tonnato" price="820/-" />
            <Dishcard img={img2} title="Tangy Pickled Cabbage" price="920/-"/>
            <Dishcard img={img3} title="Eggplant Parmesan" price="710/-" />
        </div>
    </div>
  )
}

export default Menu