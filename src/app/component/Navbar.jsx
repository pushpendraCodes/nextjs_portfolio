"use client"
import React, { useContext } from "react";
import { TfiMenu } from "react-icons/tfi";
import { MenuContext } from "../context/MenuBarContext";
const Navbar = () => {

  const{isOpen,setOpen} = useContext(MenuContext)
  console.log(isOpen,"open")
  return (
    <div className="navbar py-3 flex justify-between px-5">
      <div className="left flex gap-1">
        <div className="1  rounded-full bg-green-500  w-4 h-4"></div>
        <div className="1 rounded-full bg-green-500  w-4 h-4"></div>
      </div>
      <div className="right flex justify-between ">
        <button className="bg-green-500 px-2 py-1 mx-2 rounded-sm  font-thin  font-mono hover:bg-green-900 ">Resume </button>
        <button className="bg-blue-700 px-2 py-1 rounded-sm font-mono font-light hover:bg-blue-900">contact Me</button>
        <button
         onClick={()=>{setOpen(!isOpen)}}
         className="mx-4 block xl:hidden"><TfiMenu   size={20} /></button>
      </div>
    </div>
  );
};

export default Navbar;
