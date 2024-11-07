import React from "react";
import { FaInstagram } from "react-icons/fa";
const About = () => {
  return (
    <div className="bg-black h-screen w-screen">
      <div>
        <div className="absolute bg-slate-600 h-[200px] w-[200px] rounded-xl m-5 justify-items-center">
          <div className=" bg-red-400 w-[200px] h-[200px] rounded-xl items-center">
            <FaInstagram color="white" size={42} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
