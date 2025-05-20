import React from "react";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
        {/* text section  */}
        <div className="flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10">
          <h1 className="text-4xl lg:text-6xl font-semibold ">
            Dive into the Essence of Asian Cuisine
          </h1>
          <p className="font-semibold">
            Explore a world where every bite tells a story. From sizzling street food to exquisite delicacies, let your taste buds travel through Asia.
          </p>
          <div className="flex gap-4 items-center md:justify-start justify-center">
            <button className="primary-btn hover:scale-105 duration-200">
              Food Menu
            </button>
            <button className="secondary-btn hover:scale-105 duration-200">
              Book Table
            </button>
          </div>
        </div>
        {/* image section  */}
        <div className="flex flex-col justify-center">
          <img
            src={HeroImg}
            alt=""
            className="animate-spin-slow img-shadow w-[450px] mx-auto "
          />
        </div>
      </div>
  );
};

export default Hero;
