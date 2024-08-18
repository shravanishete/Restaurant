import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">FoodieWeb</h1>
          <p className="text-sm">
            Indulge in a symphony of flavors, where each plate is a canvas for
            culinary excellence.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/dishes"
            >
              Dishes
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/menu"
            >
              Menu
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/reviews"
            >
              Reviews
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/our-dishes"
            >
              Our Dishes
            </Link>
            <Link
              className="hover:text-brightColor transition-all cursor-pointer"
              to="/premium-menu"
            >
              Premium Menu
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="mailto:FoodieWeb@email.com"
            >
              FoodieWeb@email.com
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="tel:+64958248966"
            >
              +64 958 248 966
            </a>
            <div className="hover:text-brightColor transition-all cursor-pointer">
              Social Media
            </div>
          </nav>
          <div className="flex gap-4 pt-4">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="https://facebook.com"
            >
              <BsFacebook size={24} />
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="https://twitter.com"
            >
              <RiTwitterXFill size={24} />
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="https://instagram.com"
            >
              <BsInstagram size={24} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p className="text-center py-4">
          © {new Date().getFullYear()} developed by
          <span className="text-brightColor"> Shravani Shete</span> | All
          rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
