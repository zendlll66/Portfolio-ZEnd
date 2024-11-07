import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineAntDesign } from "react-icons/ai";
import { IoIosGitNetwork } from "react-icons/io";

const CardHover1 = ({ text, text2, num }) => {
  const [hoverState, setHoverState] = useState(false);
  return (
    <div>
      <div
        className="relative bg-[#191919] h-[200px] w-[200px] rounded-xl  overflow-hidden"
        onMouseEnter={() => setHoverState(true)}
        onMouseLeave={() => setHoverState(false)}
      >
        <div
          className={`absolute  ${
            hoverState
              ? "bg-red-400 w-full h-full top-0"
              : "bg-red-400 w-[50px] h-[50px]"
          } rounded-xl left-[50%] top-3 transform -translate-x-1/2 transition-all duration-1000`}
        ></div>
        {num == 1 && (
          <AiOutlineAntDesign
            color="white"
            size={42}
            className="z-0 absolute left-[50%] top-4 transform -translate-x-1/2 "
          />
        
        )}
        {num == 2 && (
          <FaInstagram
            color="white"
            size={42}
            className="z-0 absolute left-[50%] top-4 transform -translate-x-1/2 "
          />
        
        )}
        {num == 3 && (
          <IoIosGitNetwork
            color="white"
            size={42}
            className="z-0 absolute left-[50%] top-4 transform -translate-x-1/2 "
          />
        
        )}
        <div className="bottom-0 absolute w-full h-1/2">
          <p
            className={`text-center z-0 duration-500 transform transition-all ${
              hoverState ? "text-white scale-110 animate-bounce animat-duration-200 " : "text-white scale-100"
            }`}
          >
            {hoverState ? text2 : text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardHover1;
