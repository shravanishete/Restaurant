/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import img from "../assets/img/about.avif";
import Button from "../layout/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      {/* Animate the image with rotation */}
      <motion.img
        src={img}
        alt="img"
        className="w-full lg:w-1/3 h-auto lg:h-full object-cover rounded-md max-w-full max-h-48 lg:max-h-full"
        whileHover={{ rotate: 360 }} // Rotate 360 degrees on hover (or use whileTap for mobile)
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }} // Rotate continuously with linear ease
      />

      <div className="lg:pl-8 space-y-4 lg:pt-14">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p className="text-base md:text-lg text-justify">
          Our menu features a diverse selection of delicious dishes made from the freshest ingredients,
          ensuring each bite is a culinary masterpiece. Our warm and inviting ambiance, paired with attentive
          and friendly service, creates the perfect setting for any occasion.
        </p>
        <p className="text-base md:text-lg text-justify">
          Join us and discover why Foodi Web is the preferred choice for those who appreciate great food,
          outstanding service, and a welcoming atmosphere.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
