import React from "react";
import { FaArrowRightArrowLeft, FaGithub } from "react-icons/fa6";
import { GiClothes } from "react-icons/gi";
import { IoArrowRedoCircleOutline } from "react-icons/io5";
import ThreeScene from "./ThreeScene";
export const Technology = () => {
  return (
    <div className="tech md:px-10 py-1">


      <h2 className="text-2xl">What i Know</h2>
      <div className="grid grid-cols-5 mt-1  gap-3">
        <div className=" xl lg:col-span-4 md sm:col-span-5 col-span-5   mt-10 text-slate-400 gap-2">
          <div className="  text-xs  bg-[#1e1c27] py-4 px-4 h-90 rounded-md">
            <h2 className="my-5 text-xl text-white">FrontEnd</h2>
            <div className=" font-thin mt-2 ">
              <button className=" border-sky-850 	border font-bold  bg-black rounded-md px-2 mx-1 py-2">
                html
              </button>
              <button className=" border-stone-500 border font-bold bg-black rounded-md px-2 mx-1 py-2">
                css
              </button>
              <button className="border border-cyan-600 my-2	font-bold bg-black rounded-md px-2 mx-2 py-2">
                Tailwind{" "}
              </button>
              <button className="border border-cyan-900  font-bold bg-black rounded-md px-2 mx-1 py-2">
                Bootstrap{" "}
              </button>
              <button className=" border border-pink-400 my-2 font-bold bg-black rounded-md px-2 mx-1 py-2">
                Javacript{" "}
              </button>
              <button className=" bg-black rounded-md px-2 mx-1 py-2 border border-red-500	font-bold">
                React js{" "}
              </button>
              <button className="   bg-black rounded-md px-2 font-bold my-2 mx-1 py-2 border border-emerald-400	">
                Next js{" "}
              </button>
              <button className="   bg-black rounded-md px-2 font-bold my-2 mx-1 py-2 border border-teal-400	">
               Chakra ui
              </button>
            </div>
          </div>
          <div className=" text-xs bg-[#1e1c27] py-4 px-4 h-90 rounded-md">
            <h2 className="my-5  text-xl text-white">Backend</h2>
            <div className=" font-thin mt-2 ">
              <button className=" border-sky-450	border font-bold bg-black rounded-md px-2 mx-1 py-2">
                Node js
              </button>
              <button className=" border-pink-600 border rounded-md bg-black  px-2 py-2 font-bold">
               Express
              </button>
              <button className="border border-cyan-500 rounded-md mx-1	bg-black px-2 py-2 my-2 font-bold">
              Next Auth
              </button>

            </div>
          </div>
          <div className=" text-xs bg-[#1e1c27] py-4 px-4 h-90 rounded-md">
            <h2 className="my-5  text-xl text-white">Database</h2>
            <div className=" font-thin mt-2 ">
              <button className=" border-blue-450 bg-black rounded-md	border  px-2 mx-1 font-bold py-2">
                Mongo DB
              </button>
              <button className=" border-teal-500 font-bold bg-black rounded-md border px-2 my-2 py-2">
              MySql
              </button>

            </div>
          </div>
          <div className=" text-xs bg-[#1e1c27] py-4 px-4 h-90 rounded-md">
            <h2 className="my-5 text-xl text-white ">Devops</h2>
            <div className=" font-thin mt-2 ">
              <button className=" border-yellow-600	 font-bold rounded-md bg-black px-2 mx-1 py-2">
                GIT
              </button>

            </div>
          </div>
        </div>
        <div className=" xl lg:col-span-1 md sm:col-span-2 col-span-5 h-96 md sm:h-96   py-3 bg-[#1e1c27]">
          <h2 className="text-center">More Projects</h2>
          <div className="w-full flex justify-between md sm:my-4 my-4 py-5 px-1 items-center ">
            <div className="w-1/4 flex justify-center items-center ">
            <a target="blank"  href="https://github.com/pushpendraCodes/React_E-commerce-">
                  <FaGithub size={20} cursor={"pointer"} color="white" />
                </a>
            </div>
            <div className="w-2/4  flex  flex-col justify-center items-center">
              <h2 className="text-sm font-normal">React -E-com</h2>
              <p className="text-xs font-light text-gray-500">React</p>
            </div>
            <div className="w-1/4  flex justify-center items-center">
            <a target="blank"  href="https://apnastore-ecom.netlify.app/">
                  <IoArrowRedoCircleOutline
                    size={20}
                    cursor={"pointer"}
                    color="white"
                  />
                </a>
            </div>
          </div>
          <div className="w-full flex justify-between py-5 px-1 items-center ">
            <div className="w-1/4 flex justify-center items-center">
            <a target="blank"  href="https://github.com/pushpendraCodes/Jio.com-clone-react">
                  <FaGithub size={20} cursor={"pointer"} color="white" />
                </a>
            </div>
            <div className="w-2/4 flex flex-col justify-center items-center">
              <h2 className="text-sm font-normal">Jio.com clone</h2>
              <p className="text-xs font-light text-gray-500">React Tailwind css</p>
            </div>
            <div className="w-1/4 flex justify-center items-center">
           <a target="blank"  href="https://jio-dot-com-clone.netlify.app/">
                  <IoArrowRedoCircleOutline
                    size={20}
                    cursor={"pointer"}
                    color="white"
                  />
                </a>
            </div>
          </div>
          <div className="w-full flex justify-between py-5 px-1 items-center ">
            <div className="w-1/4 flex justify-center items-center">
              <a target="blank"  href="https://github.com/pushpendraCodes/Nextjs_blog_app">
                  <FaGithub size={20} cursor={"pointer"} color="white" />
                </a>
            </div>
            <div className="w-2/4 flex  flex-col justify-center text-center items-center">
              <h2 className="text-sm font-normal">chat app</h2>
              <p className="text-xs font-light text-gray-500"> react node socket express</p>
            </div>
            <div className="w-1/4 flex justify-center items-center">
             <a target="blank" href="https://nextjs-blog-app-hazel.vercel.app/">
                  <IoArrowRedoCircleOutline
                    size={20}
                    cursor={"pointer"}
                    color="white"
                  />
                </a>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};
