import React, { useState } from "react";
import CardHover1 from "../components/CardHover1";

const About = () => {
  return (
    <div className="bg-black h-screen w-screen flex items-center justify-center space-x-3">
      <CardHover1 text={"UX/UI"} text2={"FIGMA,MOTION,etc."} num={1}/>
      <CardHover1 text={"hello"} text2={"hehheheheh"} num={2}/>
      <CardHover1 text={"hhhh"} text2={"oooooooo"} num={3}/>
    </div>
  );
};

export default About;
