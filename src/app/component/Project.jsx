import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
const Project = () => {
  return (
    <>
      <div className="xl lg md:px-10 py-5">
        <h2 className="my-5 text-2xl">Projects</h2>

        <div class="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4">
          <div className="project1 lg:max-h-64 xl:max-h-64 overflow-hidden rounded-xl  ">
            <div className=" w-full xl:h-1/2   md:h-3/5  ">
              <img
                className="w-full h-full  object-cover"
                src="/e-com.png"
                alt=""
              />
            </div>
            <div className=" bg-white sm:py-3 py-3  xl:h-1/2 md:h-2/5 md:py-3  px-3 xl:py-2 lg:py-3  ">
              <h2 className="min-w-max text-xl font-bold text-black my-1">Apna Cart E-com</h2>
              <p className="min-w-max text-sm font-mono text-gray-800 font-thin">
                React Redux Tailwind nodejs
              </p>
              <p className="min-w-max text-sm font-mono text-gray-800 font-thin">
                express stripe mongodb
              </p>
              <div className="lg:mb-2 flex justify-end gap-4">
                <a href="https://github.com/pushpendraCodes/mern-e-commerce" target="blank">
                  <FaGithub size={20} cursor={"pointer"} color="black" />
                </a>
                <a href="https://apnacart.vercel.app/" target="blank" >
                  <IoArrowRedoOutline
                    size={20}
                    cursor={"pointer"}
                    color="black"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="project1 lg:max-h-64 xl:max-h-64 overflow-hidden rounded-xl   ">
          <div className=" w-full xl:h-1/2   md:h-3/5  ">
              <img
               className="w-full h-full  object-cover"
                src="/project_1.png"
                alt=""
              />
            </div>
            <div className=" bg-white sm:py-3 py-3  xl:h-1/2 md:h-2/5 md:py-3  px-3 xl:py-2 lg:py-3  ">
              <h2 className="min-w-max text-wrap text-xl font-bold text-black my-1">
                {" "}
                E-grievance portal
              </h2>
              <p className="min-w-max text-sm font-mono text-gray-800 font-thin">
                React nodejs express
              </p>
              <p className="min-w-max  text-sm font-mono text-gray-800 font-thin">
                mongodb
              </p>
              <div className="mt-1 flex justify-end gap-4">
                <a href="https://github.com/pushpendraCodes/Mern-Grievance-Reddressal-Portal" target="blank">
                  <FaGithub size={20} cursor={"pointer"} color="black" />
                </a>
                <a href="https://student-grievance-rederessal-portal.netlify.app" target="blank">
                  <IoArrowRedoOutline
                    size={20}
                    cursor={"pointer"}
                    color="black"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:max-h-64 xl:max-h-64 overflow-hidden rounded-xl  ">
          <div className=" w-full xl:h-1/2   md:h-3/5  ">
              <img
              className="w-full h-full  object-cover"
                src="/project_3.png"
                alt=""
              />
            </div>
            <div className=" bg-white sm:py-3 py-3  xl:h-1/2 md:h-2/5 md:py-3  px-3 xl:py-2 lg:py-3  ">
              <h2 className="min-w-max  text-black text-xl font-bold my-1">Facebook clone</h2>
              <p className="min-w-max text-sm font-mono text-gray-800 font-thin">
                React nodejs express
              </p>
              <p className="min-w-max  text-sm font-mono text-gray-800 font-thin">
                mongodb
              </p>
              <div className="mt-1 flex justify-end gap-4">
                <a href="https://github.com/pushpendraCodes/Mern-Facebook-clone-">
                  <FaGithub size={20} cursor={"pointer"} color="black" />
                </a>
                <a href="https://facebookpushpendra.netlify.app/">
                  <IoArrowRedoOutline
                    size={20}
                    cursor={"pointer"}
                    color="black"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:max-h-64 xl:max-h-64 overflow-hidden rounded-xl   ">
          <div className=" w-full xl:h-1/2   md:h-3/5  ">
              <img className="w-full h-full  object-cover" src="/project5.png" alt="" />
            </div>
            <div className=" bg-white sm:py-3 py-3  xl:h-1/2 md:h-2/5 md:py-3  px-3 xl:py-2 lg:py-3  ">
              <h2 className="min-w-max  text-black text-xl font-bold my-1">Next js Blog app</h2>
              <p className="min-w-max text-sm font-mono text-gray-800 font-thin">
                Nextjs 13 NextAuth nextApi
              </p>
              <p className="min-w-max text-sm font-mono text-gray-800 font-thin">
               Mongo db
              </p>
              <div className="mt-1 flex justify-end gap-4 align-text-bottom ">
                <a href="https://github.com/pushpendraCodes/Nextjs_blog_app">
                  <FaGithub size={20} cursor={"pointer"} color="black" />
                </a>
                <a href="https://nextjs-blog-app-hazel.vercel.app/">
                  <IoArrowRedoOutline
                    size={20}
                    cursor={"pointer"}
                    color="black"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
