import React from "react";
import { LuDownload } from "react-icons/lu";
import { FaRegFileLines } from "react-icons/fa6";

const Card = () => {
  return (
    <div className="relative text-white px-5 py-10 w-60 h-72 rounded-[40px] bg-zinc-900/90 overflow-hidden ">
      <FaRegFileLines />
      <p className=" text-sm mt-5 leading-tight">
        Lorem ipsum dolor sit amet, consectetur adipisicing.
      </p>
      <div className="footer absolute bottom-0 w-full left-0">
        <div className="flex items-center justify-between px-8 mb-2">
          <h5>.4mb</h5>
          <span className="w-6 h-6 rounded-full bg-zinc-600 flex items-center justify-center">
            <LuDownload size={".8em"} color="#fff" />
          </span>
        </div>
        <div className="tag bg-green-500 w-full py-3 flex justify-center items-center">
          <h3 className="text-sm font-semibold">Download Now</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
