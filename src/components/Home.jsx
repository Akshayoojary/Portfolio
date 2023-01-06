import React from "react";
import {Link} from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-r from-fuchsia-500 to-cyan-500"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I Am a Front-End-Developer
          </h2>
          <p className="text-black-500 py-4 max-w-md">
            Hi my name is Akshay i am a Front-End-Developer I love to work on
            Web Application using Technologies like React , Bootstrap , Tailwind
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
