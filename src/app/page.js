

import Image from "next/image";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import Rightbar from "./component/rightbar/Rightbar";


export default function Home() {

  return (
    <>
      <div className="p-3">
        <Navbar />

        <div className="main flex py-5 relative ">
          <div  className={`sidebarxl:w-1/6    `}>
            <Sidebar />
          </div>
          <div className="rightbar xl:w-5/6">
            <Rightbar />
          </div>
        </div>
      </div>
    </>
  );
}
