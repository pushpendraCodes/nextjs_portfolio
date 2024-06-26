

import Image from "next/image";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Rightbar from "./component/rightbar/Rightbar";
import ThreeScene from "./component/ThreeScene";


export default function Home() {

  return (
    <>
      <div className="p-3">
      {/* <ThreeScene/> */}
        <Navbar />

        <div className="main flex py-5 relative ">
          <div  className={`sidebarxl:w-1/6    `}>
            <Sidebar />
          </div>
          <div className="rightbar xl:w-5/6">
            <Rightbar />
          </div>
        </div>
   <div>
    <p className="text-center">Copyright ©2024   PushpendraCodes. All rights reserved</p>
   </div>
      </div>
    </>
  );
}
