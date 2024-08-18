import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { BiChevronDown, BiRestaurant } from 'react-icons/bi';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Button from '../layout/Button';
import { useState } from 'react';

const Navbar = () => {
  // State to manage the mobile menu visibility
  const [menu, setMenu] = useState(false);

  // Function to toggle the mobile menu visibility
  const handleChange = () => {
    setMenu(!menu); // Toggle the menu state between true and false
  };

  // Function to close the mobile menu
  const closeMenu = () => {
    setMenu(false); // Set the menu state to false to close the menu
  };

  return (
    <div className='fixed w-full'>
      <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.1)]'>
        <div className='flex items-center'>
          <span><BiRestaurant size={36} color='red' /></span>
          <h1 className='ml-2 text-lg font-medium'>Foodi Web</h1>
        </div>

        <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
          <NavLink to="/" exact activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer'>Home</NavLink>
          <div className='relative group'>
            <div className='flex items-center gap-1'>
              <NavLink to="/dishes" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer'>Dishes</NavLink>
              <BiChevronDown className='cursor-pointer' size={25} />
            </div>
            <ul className='absolute hidden space-y-2 group-hover:block bg-white border border-gray-300 rounded-lg p-5'>
              <li>
                <NavLink to="/dishes/spicy" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer'>Spicy</NavLink>
              </li>
              <li>
                <NavLink to="/dishes/tasty" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer'>Tasty</NavLink>
              </li>
              <li>
                <NavLink to="/dishes/delicious" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer'>Delicious</NavLink>
              </li>
              <li>
                <NavLink to="/dishes/crispy" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer'>Crispy</NavLink>
              </li>
            </ul>
          </div>
          <NavLink to="/about" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer'>About</NavLink>
          <NavLink to="/menu" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer'>Menu</NavLink>
          <NavLink to="/review" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer'>Reviews</NavLink>
          <Button title='Login' />
        </nav>

        <div className='md:hidden flex items-center'>
          {menu ? (
            <AiOutlineClose size={25} onClick={handleChange} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleChange} />
          )}
        </div>
      </div>
      <div className={`${menu ? 'translate-x-0' : '-translate-x-full'}
       lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-4 gap-8 w-full h-fit transition-transform duration-300`}>
        <NavLink to="/" exact activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer' onClick={closeMenu}>Home</NavLink>
        <NavLink to="/dishes" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer' onClick={closeMenu}>Dishes</NavLink>
        <NavLink to="/about" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer' onClick={closeMenu}>About</NavLink>
        <NavLink to="/menu" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer' onClick={closeMenu}>Menu</NavLink>
        <NavLink to="/review" activeClassName='text-brightColor' className='hover:text-brightColor transition-all cursor-pointer' onClick={closeMenu}>Reviews</NavLink>
        <Button title='Login' />
      </div>
    </div>
  );
}

export default Navbar;
