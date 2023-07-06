import React from "react";
import "../index.css";
import Type from "./Home/Type";

import Nurse_svg from "./Home/Nurse_svg";
import Searchbar from "./Home/Searchbar";

export default function Home() {
  return (
    <div className="flex flex-wrap content-center w-full ">
      <div className="relative flex justify-between h-80">
        <Type></Type>
        <Nurse_svg></Nurse_svg>
      </div>

      <div className=" inline-block font-bold static w-full pt-[4rem] pl-4 h-[50vh] text-[40px] bg-violet-1">
        <h1>Book Doctors</h1>
        <h2>According to your location</h2>
        <Searchbar></Searchbar>
      </div>
    </div>
  );
}
