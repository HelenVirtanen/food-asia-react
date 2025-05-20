import React from "react";
import Profile from "../../assets/profile.png";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className=" py-4">
      <div className="container flex justify-between items-center">
        {/* logo section */}
        <div>
          <p className="text-lg font-semibold">
            FOOD <span className="text-red-500">ASIA</span>
          </p>
        </div>
        {/* Menu section */}
        <div className="flex justify-center items-center gap-10">
          <ul className="gap-8 hidden sm:flex">
            <li className="border-b-2 border-transparent hover:border-primary duration-200 uppercase">Home</li>
            <li className="border-b-2 border-transparent hover:border-primary duration-200 uppercase">Menu</li>
            <li className="border-b-2 border-transparent hover:border-primary duration-200 uppercase">About</li>
          </ul>

          {/* login section */}
          <div className="flex gap-4 items-center">
            <img src={Profile} alt="" className="w-10 rounded-full" />
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
