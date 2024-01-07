import React from "react";
import "../component/rightbar/rightbar.css";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";
const Hero = () => {
  return (
    <div className=" backdrop px-1   ">
      <div className="  relative z-10 h-full flex justify-between items-center">
        <div className="xl:w-1/2 lg:w-1/2 md:w-3/5 h-full flex items-center  gap-4 justify-center">
          <div className="  flex items-center mx-2 justify-center ">
            <Image
              src="https://nextjs-portfolio-five-lilac.vercel.app/dp1.png  "
              width={100}
              height={50}
              className="rounded-full w-28 h-28 xl lg md:w-32 xl lg md:h-32 object-cover "
            />
          </div>
          <div className="name ">
            <h2 className="font-bold  font-sans text-2xl  xl lg md:text-3xl">Pushpendra patel</h2>
            <p className="text-sm">@pushpendraCodes</p>
          </div>
        </div>

        <div className="xl:w-1/2 lg:w-1/2 hidden sm:block md:block   md:2/5 xl lg:flex justify-center cursor-pointer">
          <a target="blank" className=" px-1  xl:w-1/2 xl:flex justify-center rounded-md" href="https://www.instagram.com/i__am__pushpendra_/">
            <div className="flex  lg:w-max xl:w-max gap-2 items-center rounded-md text-gray-100 bg-slate-700 p-1">
              <FaInstagram size={25} />
              <p className="text-xs">Follow me on Instagram</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
