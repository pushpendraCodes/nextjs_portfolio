"use client";
import React, { useContext, useState } from "react";
import { GoHome } from "react-icons/go";
import { IoTrendingUpOutline, IoCode ,IoLogoInstagram} from "react-icons/io5";
import { CiLinkedin, CiVideoOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { MenuContext } from "../context/MenuBarContext";
const Sidebar = () => {
  const{isOpen,setOpen} = useContext(MenuContext)



  return (
    <div className={`sidebar pl-6 py-5 ${isOpen ?"block":"hidden"} bg-[#1e1c27]   z-30 h-full  absolute xl:relative  lg md sm:w-72  w-full xl:block    rounded-lg `}>
      <div className="menu-top ">
     <div className="flex justify-end px-2 mb-3 xl:hidden">
     <button
      onClick={()=>{setOpen(!isOpen)}}
      className="cursor-pointer" ><RxCross2 size={25} /> </button>
     </div>
        <ul className=" flex flex-col gap-7 pl-2 ">
          <Link href="" className="flex transform transition-transform duration-300 hover:-translate-y-1 gap-3 items-center">
            <GoHome color="gray" size={25} />{" "}
            <p className=" text-sm text-gray-400 ">Home</p>{" "}
          </Link>
          <Link href="" className="flex  transform transition-transform duration-300 hover:-translate-y-1 gap-3 items-center">
            <IoTrendingUpOutline color="gray" size={25} />{" "}
            <p className="  text-sm  text-gray-400  ">
              Trending
            </p>{" "}
          </Link>
          <Link href="" className="flex transform transition-transform duration-300 hover:-translate-y-1 gap-3 items-center">
            <IoCode size={25} color="gray" />{" "}
            <p className=" font-normal text-sm  text-gray-400  ">
              Snippet
            </p>{" "}
          </Link>
          <Link href="" className="flex transform transition-transform duration-300 hover:-translate-y-1 gap-3 items-center">
            <CiVideoOn size={25} color="gray" />{" "}
            <p className="text-sm   text-gray-400  ">
              Videos
            </p>{" "}
          </Link>
        </ul>
      </div>
      <div className="menu-bottom mt-6 ">

      <p className="mb-5">Social</p>
        <ul className=" flex flex-col gap-7 pl-2 ">
          <Link href="" className="flex transform transition-transform duration-300 hover:-translate-y-1 gap-3 items-center">
            <IoLogoInstagram color="red" size={25} />{" "}
            <p className="text-sm  text-gray-400 ">Instagram</p>{" "}
          </Link>
          <Link href="" className="flex transform transition-transform duration-300 hover:-translate-y-1 gap-3 items-center">
            <FiGithub color="green" size={25} />{" "}
            <p className="text-sm   text-gray-400  ">
              Github
            </p>{" "}
          </Link>
          <Link href="" className="flex transform transition-transform duration-300 hover:-translate-y-1 gap-3 items-center">
            <CiLinkedin size={25} color="blue" />{" "}
            <p className="text-sm   text-gray-400  ">
              Linkdin
            </p>{" "}
          </Link>
          <Link href="" className="flex transform transition-transform duration-300 hover:-translate-y-1 gap-3 items-center">
            <FaXTwitter size={24} color="" />{" "}
            <p className="text-sm   text-gray-400  ">
              Twitter
            </p>{" "}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
