import React, { useState } from "react"; 

const Sidebar = ({ ClickSidebar, setClickSidebar }) => {  // Add setClickSidebar here to update the state
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

  const handleLinkClick = () => {
    setClickSidebar(false); // ปิด sidebar เมื่อคลิก link
  };

  return (
    <div  
      className={`fixed z-10 bg-black top-0 left-0 h-screen w-screen transition-transform ease-in-out duration-1000 ${ 
        ClickSidebar ? "translate-y-0" : "translate-y-[-100%]" // เมื่อเปิด sidebar ให้เลื่อนจากบนลงล่าง
      }`}
    >
      <div className="absolute text-white flex flex-col w-fit text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[25px] font-bold space-y-[20px]">
        <a
          href="/"
          onClick={handleLinkClick}  // เพิ่ม onClick ที่นี่
          onMouseEnter={() => handleMouseEnter("HOME")}
          onMouseLeave={handleMouseLeave}
          className="opacity-[80%] hover:opacity-[100%] hover:text-[28px] ease-in-out duration-200"
        >
          HOME
        </a>
        <a
          href="/About"
          onClick={handleLinkClick}  // เพิ่ม onClick ที่นี่
          onMouseEnter={() => handleMouseEnter("ABOUT")}
          onMouseLeave={handleMouseLeave}
          className="opacity-[80%] hover:opacity-[100%] hover:text-[28px] ease-in-out duration-200"
        >
          ABOUT
        </a>
        <a
          href="/Portfolio"
          onClick={handleLinkClick}  // เพิ่ม onClick ที่นี่
          onMouseEnter={() => handleMouseEnter("PORTFOLIO")}
          onMouseLeave={handleMouseLeave}
          className="opacity-[80%] hover:opacity-[100%] hover:text-[28px] ease-in-out duration-200"
        >
          PORTFOLIO
        </a>
        <a
          href="/Contact"
          onClick={handleLinkClick}  // เพิ่ม onClick ที่นี่
          onMouseEnter={() => handleMouseEnter("CONTRACT")}
          onMouseLeave={handleMouseLeave}
          className="opacity-[80%] hover:opacity-[100%] hover:text-[28px] ease-in-out duration-200"
        >
          CONTRACT
        </a>
      </div>

      <h1
        className="text-white absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[150px] opacity-15 pointer-events-none"
        style={{
          letterSpacing: isHovered ? "0.1em" : "0.5em", 
          transition: "letter-spacing 0.6s ease", 
        }}
      >
        {selectedText}
      </h1>
    </div>
  );
};

export default Sidebar;
