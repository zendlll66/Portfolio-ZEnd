import React, { useState } from "react";
import CardHover1 from "../components/CardHover1";

const About = () => {
  return (
    <div className="bg-black md:h-screen  w-screen flex items-center justify-center space-x-3">
      <div className="relatflex flex-row">
        <div>
          <h2 className="text-white font-bold text-[40px] text-center">
            About Me
          </h2>
          <p className="text-white font-light text-center mx-10 md:mx-[160px] mt-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
            dicta reiciendis omnis dolores repellendus? Nemo, debitis? Qui minus
            placeat maiores quae. Provident neque repudiandae non sequi sapiente
            eos soluta numquam.
          </p>
        </div>
        <div className=" mb-10 flex md:flex-row flex-col md:space-x-10 mt-10 relative items-center md:justify-center space-y-[30px] md:space-y-[0px]">
          <CardHover1 text={"UX/UI"} text2={"FIGMA,MOTION,etc."} num={1} />
          <CardHover1 text={"hello"} text2={"hehheheheh"} num={2} />
          <CardHover1 text={"hhhh"} text2={"oooooooo"} num={3} />
        </div>
      </div>
    </div>
  );
};

export default About;
