import React from "react";
import Typewriter from "typewriter-effect";
import "./fonts.css";
export default function Home() {
  return (
    <div className="Hero-text">
      <div></div>
      <Typewriter
        options={{ loop: true, delay: "natural", autoStart: true }}
        onInit={(typewriter) => {
          typewriter
            .typeString("At Healify we save Lives!")
            .start()
            .pauseFor(1000)
            .deleteChars(6)
            .typeString("Money!")
            .pauseFor(1000)
            .deleteChars(6)
            .typeString("Time!");
        }}
      ></Typewriter>
    </div>
  );
}
