import React from "react";
import './style.css'
import heroImage from "../assets/Snapchat-635331118.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div
      name="home"
      className="  h-screen w-full bg-gradient-to-b from-black
  via-black  to-gray-800 text-white  "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center 
       justify-center h-full px-4 md:flex-row "
      >
        <div className=" flex flex-col justify-center h-full  ">
          <h1 className=" text-4xl sm:text-7xl font-bold text-white   ">
            I'm a FullStack Developer
          </h1>
          <p className="text-gray-500 py-4 max-w-md  ">
            I have complete my graduation from kiet group of Institutions in
            Computer scinece And Engineering . Recently i have done my
            Internship form Xceedance Consulting Pvt. Ltd. India. Currently i am
            looking for a job .
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className=" group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={heroImage}
            alt="my profile"
            className=" rounded-2xl mx-auto w-2/3 md:w-full  sm:mt-72"
            
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
