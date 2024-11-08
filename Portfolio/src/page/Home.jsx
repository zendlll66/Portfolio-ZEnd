import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaPhoneSquare } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

const Home = () => {
  return (

    <div className="absolute h-screen w-screen bg-black">
      <div class="area">
			
		</div>
      <div className="absolute z-[0] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] text-center justify-items-center">
        <label className="text-red-400 text-[64px] font-extrabold mr-10">
          Kittithat
        </label>
        <label className="text-white text-[64px] font-extrabold text-stroke ">
          Chankhom
        </label>
        <div className="flex flex-row w-max space-x-2">
          <label className="text-white text-[24px] ">"</label>
          <h3 class="  whitespace-nowrap  pr-0 text-[24px] text-white font-mono">
            I am 
          </h3>
          <h3 class="  animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-0 text-[24px] text-red-400 font-mono">
            Font-End
          </h3>
          <label className="text-white text-[24px] ">"</label>
        </div>
      </div>

      <div className="absolute bottom-0 left-[50%] translate-x-[-50%] mb-10 flex flex-row space-x-5">
        <a className="opacity-[50%] hover:opacity-[100%] hover:scale-110 ease-in-out duration-200" href="https://www.instagram.com/om.zend/" >
        <IoLogoInstagram color='white' size={35} />
        </a>
        <a className="opacity-[50%] hover:opacity-[100%] hover:scale-110 ease-in-out duration-200 "href="https://www.facebook.com/om.small.1/">
        <FaSquareFacebook color='white' size={35} />
        </a>
        <a className="opacity-[50%] hover:opacity-[100%] hover:scale-110 ease-in-out duration-200">
        <FaPhoneSquare color='white' size={35}/>
        </a>
        
      </div>
    </div>
  );
};

export default Home;