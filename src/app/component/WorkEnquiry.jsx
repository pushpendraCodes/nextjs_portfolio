import Image from "next/image";
import React from "react";

const WorkEnquiry = () => {
  return (
    <div className="  md:px-10 mt-5">
      <h2 className="text-2xl my-4">Work Enquiry</h2>
      <div className=" flex flex-col gap-4 w-full px-5  bg-[#1e1c27] py-4 h-46 rounded-md">
        <div>

          <p className="text-sm md:text-md  lg:text-md xl:text-md ">
          Thank you for visiting here! . i am passionate about delivering high-quality solutions  to meet your specific requirements. If you are looking for any website or software  or would like to discuss a potential collaboration, please connect with me.
          </p>

        </div>
        <div className="my-2">
          <p>Just say hi.</p>
          <a  href="whatsapp://send?text=Hello pushpendra !&phone=+918516064332" className="  w-40 my-2 flex items-center gap-1 px-2 py-1 rounded-sm font-mono font-light bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> <Image width={20} height={20} src="/whatsapp.png"  />  Lets Connect</a> <p className="text-sm">  or
          mail at  - pushpendrapatel8055@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default WorkEnquiry;
