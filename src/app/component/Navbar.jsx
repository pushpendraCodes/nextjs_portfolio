"use client"
import React, { useContext, useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { MenuContext } from "../context/MenuBarContext";
import ThreeScene from "./ThreeScene";
import Image from "next/image";
import useSound from "use-sound";
const Navbar = () => {
  const [play, { stop }] = useSound("/digital-technology-157761.mp3");
  const{isOpen,setOpen} = useContext(MenuContext)
  const[isOn ,seton]=useState(true)
  console.log(isOpen,"open")

function offSound(){
  stop()
  seton(false)
}
function onSound(){
  play()
  seton(true)
}
  useEffect(()=>{
    play()
    return () => stop();
  },[play, stop])
  return (
    <div className="navbar py-3 flex justify-between px-2">
      <div className="left flex gap-1">
        <div className="1  rounded-full bg-green-500  w-4 h-4"></div>
        <div className="1 rounded-full bg-green-500  w-4 h-4"></div>
      </div>
      <div className="right flex justify-between ">
    {isOn ? <Image onClick={offSound} width={30} height={30} src="/sound.png" />: <Image onClick={onSound} width={30} height={30} src="/mute.png" />}


        <a target="blank" href="https://nextjs-portfolio-five-lilac.vercel.app/1year_exp_in react&nodejs.pdf" className="bg-green-500 px-2 py-1 mx-2 rounded-sm  font-thin  font-mono hover:bg-green-900 ">Resume </a>
        <button className="bg-blue-700 px-2 py-1 rounded-sm font-mono font-light hover:bg-blue-900">contact Me</button>
        <button
         onClick={()=>{setOpen(!isOpen)}}
         className="mx-4 block xl:hidden"><TfiMenu   size={20} /></button>
      </div>
    </div>
  );
};

export default Navbar;
