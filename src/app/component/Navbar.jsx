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
    <div className="navbar py-3 xm lg md sm:flex justify-between px-2">
      <div className=" hidden xl lg md sm:flex xl lg md sm:left xl lg md sm:gap-1 ">
        <div className="1  rounded-full bg-green-500  w-4 h-4"></div>
        <div className="1 rounded-full bg-green-500  w-4 h-4"></div>
      </div>
      <div className="right flex justify-between xl lg md sm:flex  ">
    {isOn ? <Image className="cursor-pointer" onClick={offSound} width={30} height={30} src="/sound.png" />: <Image  className="cursor-pointer" onClick={onSound} width={30} height={30} src="/mute.png" />}


        <a target="blank" href="https://nextjs-portfolio-five-lilac.vercel.app/1year_exp_in react&nodejs.pdf" className="bg-gradient-to-r from-red-500 text-sm to-teal-500 hover:from-pink-500 hover:to-yellow-500 px-2 py-1 mx-2 rounded-sm  font-thin  font-mono ">Resume </a>
        <a  href="whatsapp://send?text=Hello pushpendra !&phone=+918516064332" className=" flex items-center gap-1 px-2 py-1 rounded-sm font-mono font-light bg-gradient-to-r text-sm from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> <Image width={20} height={20} src="/whatsapp.png"  />  contact Me</a>
{/* <div className="flex mx-1 justify-between items-center">
  <Image width={30} height={30} src="/gmail.png"  />
  <p className="text-xs">pushpendrapatel8055@gmail.com</p>
</div> */}

        <button
         onClick={()=>{setOpen(!isOpen)}}
         className="mx-4 block xl:hidden"><TfiMenu   size={20} /></button>
      </div>
    </div>
  );
};

export default Navbar;
