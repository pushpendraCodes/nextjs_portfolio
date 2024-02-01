import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoArrowRedoOutline } from "react-icons/io5";
const Project = () => {
  return (
    <>
      <div className="xl lg md:px-10 py-5">
        <h2 className="my-5 text-2xl">Projects</h2>

        <div class="grid xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-4">
          {/* <div className="project1 lg:max-h-64 xl:max-h-64 overflow-hidden rounded-xl  ">
            <div className=" w-full xl:h-1/2   md:h-3/5  ">

              <video
                controls
                controls>
                <source
                  src="/apna_ecom_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className=" bg-white sm:py-3 py-3  xl:h-1/2 md:h-2/5 md:py-3  px-3 xl:py-2 lg:py-3  ">
              <h2 className="min-w-max text-xl font-bold text-black my-1">
                Apna Cart E-com
              </h2>
              <p className="min-w-max text-xs font-mono text-gray-800 font-thin text-sm">
                React, Redux, Tailwind, nodejs
              </p>
              <p className="min-w-max text-xs font-mono text-gray-800 font-thin text-sm">
                express, stripe, mongodb
              </p>
              <div className="mb-2 flex justify-end gap-4">
                <a
                  href="https://github.com/pushpendraCodes/mern-e-commerce"
                  target="blank">
                  <FaGithub
                    size={20}
                    cursor={"pointer"}
                    color="black"
                  />
                </a>
                <a
                  href="https://apnacart.vercel.app/"
                  target="blank">
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

              <video
                controls
                controls>
                <source
                  src="/grievnace_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className=" bg-white sm:py-3 py-3  xl:h-1/2 md:h-2/5 md:py-3  px-3 xl:py-2 lg:py-3  ">
              <h2 className="min-w-max text-wrap text-xl font-bold text-black my-1">
                {" "}
                E-grievance portal
              </h2>
              <p className="min-w-max text-xs font-mono text-gray-800 font-thin text-sm">
                React nodejs express
              </p>
              <p className="min-w-max  text-xs font-mono text-gray-800 font-thin text-sm">
                mongodb
              </p>
              <div className="mb-2 flex justify-end gap-4">
                <a
                  href="https://github.com/pushpendraCodes/Mern-Grievance-Reddressal-Portal"
                  target="blank">
                  <FaGithub
                    size={20}
                    cursor={"pointer"}
                    color="black"
                  />
                </a>
                <a
                  href="https://student-grievance-rederessal-portal.netlify.app"
                  target="blank">
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

              <video
                controls
                controls>
                <source
                  src="/facebook_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className=" bg-white sm:py-3 py-3  xl:h-1/2 md:h-2/5 md:py-3  px-3 xl:py-2 lg:py-3  ">
              <h2 className="min-w-max  text-black text-xl font-bold my-1">
                Facebook clone
              </h2>
              <p className="min-w-max text-xs font-mono text-gray-800 font-thin text-sm">
                React nodejs express
              </p>
              <p className="min-w-max  text-xs font-mono text-gray-800 font-thin text-sm">
                mongodb
              </p>
              <div className="mb-2  flex justify-end gap-4">
                <a href="https://github.com/pushpendraCodes/Mern-Facebook-clone-">
                  <FaGithub
                    size={20}
                    cursor={"pointer"}
                    color="black"
                  />
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


              <video
                controls
                controls>
                <source
                  src="/blog_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className=" bg-white sm:py-3 py-3  xl:h-1/2 md:h-2/5 md:py-3  px-3 xl:py-2 lg:py-3  ">
              <h2 className="min-w-max  text-black text-xl font-bold my-1">
                Next js Blog app
              </h2>
              <p className="min-w-max text-xs font-mono text-gray-800 font-thin text-sm">
                Nextjs 13 NextAuth nextApi
              </p>
              <p className="min-w-max text-xs font-mono text-gray-800 font-thin text-sm">
                Mongo db
              </p>
              <div className="mb-2 flex justify-end gap-4 align-text-bottom ">
                <a href="https://github.com/pushpendraCodes/Nextjs_blog_app">
                  <FaGithub
                    size={20}
                    cursor={"pointer"}
                    color="black"
                  />
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
          </div> */}


          <div className="">
              <video
controls muted
                >
                <source
                  src="/apna_ecom_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-between my-2">
                <h2 className="min-w-max text-xl font-bold  my-1">
                  Apna Cart E-com
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/pushpendraCodes/mern-e-commerce"
                    target="blank">
                    <FaGithub
                      size={20}
                      cursor={"pointer"}
                      color="white"
                    />
                  </a>
                  <a
                    href="https://apnacart.vercel.app/"
                    target="blank">
                    <IoArrowRedoOutline
                      size={20}
                      cursor={"pointer"}
                      color="white"
                    />
                  </a>
                </div>
              </div>
              <p className="text-gray-300 text-md font-thin text-sm">
                A complete Mern E-commerce with admin dashboard to manage order
                & stripe payment gateway
              </p>
              <div className="my-2 flex-wrap flex gap-2 ">
                <button className="bg-blue-600 px-2 text-sm hover:bg-blue-400 py-1 rounded-md">
                  React
                </button>
                <button className="bg-blue-600  px-2 text-sm hover:bg-blue-400 py-1 rounded-md">
                  Redux
                </button>
                <button className="bg-blue-600  px-2 text-sm hover:bg-blue-400 py-1 rounded-md">
                  Tailwind
                </button>
                <button className="bg-blue-600  px-2 text-sm hover:bg-blue-400 py-1 rounded-md">
                  Node
                </button>
                <button className="bg-blue-600  px-2 text-sm hover:bg-blue-400 py-1 rounded-md">
                  Express
                </button>
                <button className="bg-blue-600  px-2 text-sm hover:bg-blue-400 py-1 rounded-md">
                  Monogdb
                </button>

                <button className="bg-blue-600 text-sm px-2 hover:bg-blue-400 py-1 rounded-md">
                  Stripe
                </button>
              </div>
            </div>
          <div className="">
              <video
             loop muted playsinline controls
                >
                <source
                   src="/grievnace_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-between my-2">
                <h2 className="min-w-max text-xl font-bold  my-1">
                E-grievance portal
                </h2>
                <div className="flex gap-4">
                <a
                  href="https://github.com/pushpendraCodes/Mern-Grievance-Reddressal-Portal"
                  target="blank">
                  <FaGithub
                    size={20}
                    cursor={"pointer"}
                    color="white"
                  />
                </a>
                <a
                  href="https://student-grievance-rederessal-portal.netlify.app"
                  target="blank">
                  <IoArrowRedoOutline
                    size={20}
                    cursor={"pointer"}
                    color="white"
                  />
                </a>
                </div>
              </div>
              <p className="text-gray-300  font-thin text-sm">
                A complete Mern  E-grievance portal
              </p>
              <div className="my-2 flex-wrap flex gap-2 ">
                <button className="bg-blue-600 text-sm px-2  hover:bg-blue-400 py-1 rounded-md">
                  React
                </button>

                <button className="bg-blue-600 text-sm px-2 hover:bg-blue-400 py-1 rounded-md">
                  Tailwind
                </button>
                <button className="bg-blue-600 text-sm px-2 hover:bg-blue-400 py-1 rounded-md">
                  Node
                </button>
                <button className="bg-blue-600 text-sm px-2 hover:bg-blue-400 py-1 rounded-md">
                  Express
                </button>

                <button className="bg-blue-600 text-sm px-2 hover:bg-blue-400 py-1 rounded-md">
                  Mongodb
                </button>
              </div>
            </div>
          <div className="">
              <video
             loop muted playsinline controls
                >
                <source
                 src="/facebook_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-between my-2">
                <h2 className="min-w-max text-xl font-bold  my-1">
                Facebook clone
                </h2>
                <div className="flex gap-4">
                <a href="https://github.com/pushpendraCodes/Mern-Facebook-clone-">
                  <FaGithub
                    size={20}
                    cursor={"pointer"}
                    color="white"
                  />
                </a>
                <a href="https://facebookpushpendra.netlify.app/">
                  <IoArrowRedoOutline
                    size={20}
                    cursor={"pointer"}
                    color="white"
                  />
                </a>
                </div>
              </div>
              <p className="text-gray-300 text-md font-thin text-sm">
                A complete Mern Facebook Clone
              </p>
              <div className="my-2 flex-wrap flex gap-2 ">
                <button className="bg-blue-600 text-sm px-2  hover:bg-blue-400 py-1 rounded-md">
                  React
                </button>


                <button className="bg-blue-600 text-sm px-2 hover:bg-blue-400 py-1 rounded-md">
                  Node
                </button>
                <button className="bg-blue-600 text-sm px-2 hover:bg-blue-400 py-1 rounded-md">
                  Express
                </button>

                <button className="bg-blue-600 text-sm px-2 hover:bg-blue-400 py-1 rounded-md">
                  Mongodb
                </button>
              </div>
            </div>
          <div className="">
              <video
             loop muted playsinline controls
                >
               <source
                 src="/blog_video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <div className="flex justify-between my-2">
                <h2 className="min-w-max text-xl font-bold  my-1">
                Next js Blog app
                </h2>
                <div className="flex gap-4">
                <a href="https://github.com/pushpendraCodes/Nextjs_blog_app">
                  <FaGithub
                    size={20}
                    cursor={"pointer"}
                    color="white"
                  />
                </a>
                <a href="https://nextjs-blog-app-hazel.vercel.app/">
                  <IoArrowRedoOutline
                    size={20}
                    cursor={"pointer"}
                    color="white"
                  />
                </a>
                </div>
              </div>
              <p className="text-gray-300 text-md font-thin text-sm">
                A complete Blog Application using Nect js
              </p>
              <div className="my-2 flex-wrap flex gap-2 ">
                <button className="bg-blue-600 text-sm px-2  hover:bg-blue-400 py-1 rounded-md">
                  React
                </button>
                <button className="bg-blue-600 text-sm px-2  hover:bg-blue-400 py-1 rounded-md">
                  Nextjs14
                </button>
                <button className="bg-blue-600 text-sm px-2 hover:bg-blue-400 py-1 rounded-md">
                  Tailwind
                </button>
                <button className="bg-blue-600 text-sm px-2 hover:bg-blue-400 py-1 rounded-md">
                  NextApi
                </button>
                <button className="bg-blue-600 text-sm px-2 hover:bg-blue-400 py-1 rounded-md">
                  Mongodb
                </button>

              </div>
            </div>

        </div>
      </div>
    </>
  );
};

export default Project;
