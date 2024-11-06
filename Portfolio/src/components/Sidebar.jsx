import React, { useState } from "react"; 

const Sidebar = ({ ClickSidebar }) => {
  const [selectedText, setSelectedText] = useState(""); // สถานะของข้อความที่เลือก
  const [isHovered, setIsHovered] = useState(false); // สถานะของ hover
  
 
  const handleMouseEnter = (text) => {
    setSelectedText(text);  
    setIsHovered(true);     
  };


  const handleMouseLeave = () => {
    setSelectedText("");    
    setIsHovered(false);   
  };

  return (
    <div  className={`absolute z-[10] bg-black  bottom-0 left-0 h-screen w-screen transition-transform duration-300 ${
      ClickSidebar
        ? "translate-y-0 animate-bounce-once"
        : "translate-y-full animate-bounce-once"
    }`}>
      <div className="absolute text-white flex flex-col w-fit text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[25px] font-bold space-y-[20px]">
        <a
          href="/"
          onMouseEnter={() => handleMouseEnter("HOME")}
          onMouseLeave={handleMouseLeave}
          className="opacity-[80%] hover:opacity-[100%] hover:text-[28px] ease-in-out duration-200"
        >
          HOME
        </a>
        <a
          href="/About"
          onMouseEnter={() => handleMouseEnter("ABOUT")}
          onMouseLeave={handleMouseLeave}
          className="opacity-[80%] hover:opacity-[100%] hover:text-[28px] ease-in-out duration-200"
        >
          ABOUT
        </a>
        <a
          href="/Portfolio"
          onMouseEnter={() => handleMouseEnter("PORTFOLIO")}
          onMouseLeave={handleMouseLeave}
          className="opacity-[80%] hover:opacity-[100%] hover:text-[28px] ease-in-out duration-200"
        >
          PORTFOLIO
        </a>
        <a
          href="/Contact"
          onMouseEnter={() => handleMouseEnter("CONTRACT")}
          onMouseLeave={handleMouseLeave}
          className="opacity-[80%] hover:opacity-[100%] hover:text-[28px] ease-in-out duration-200"
        >
          CONTRACT
        </a>
      </div>

      
      <h1
        className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[150px] opacity-15 pointer-events-none "
        style={{
          letterSpacing: isHovered ? "0.1em" : "0.5em", 
          transition: "letter-spacing 0.6s ease ", 
        }}
      >
        {selectedText}
      </h1>
    </div>
  );
};

export default Sidebar;
