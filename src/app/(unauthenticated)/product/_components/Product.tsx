import React from "react";
// import DirectoryCard from './DirectoryCard'
import { Poppins } from "next/font/google";
import DirectoryCard from "@/components/DirectoryCard";
const poppins = Poppins({ weight: "400", subsets:["latin"] });

const Product = () => {
  return (
    <div
      className={`w-[80%] mx-auto max-w-screen-2xl flex gap-8 flex-col items-center py-12 ${poppins.className}`}
    >
      <h1 className="text-3xl font-bold text-[#3A3A3A] text-center">
       AAW Connecting African Importers Directory
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-8 justify-center">
          <DirectoryCard />
          <DirectoryCard />
          <DirectoryCard />
          <DirectoryCard />
        </div>
        <div className="flex justify-center md:justify-end">
          <button className="bg-[#0E1F51] rounded-full p-3 text-white px-5">Find more</button>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <DirectoryCard />
          <DirectoryCard />
          <DirectoryCard />
          <DirectoryCard />
        </div>
        <div className="flex justify-center md:justify-end">
          <button className="bg-[#0E1F51] rounded-full p-3 text-white px-5">Find more</button>
        </div>
        <div className="flex flex-wrap gap-8 justify-center">
          <DirectoryCard />
          <DirectoryCard />
          <DirectoryCard />
          <DirectoryCard />
        </div>
        <div className="flex justify-center md:justify-end">
          <button className="bg-[#0E1F51] rounded-full p-3 text-white px-5">Find more</button>
        </div>
      </div>
      {/* <div className="flex justify-center md:justify-end items-center w-full">
        <div className="flex items-center gap-4 text-sm">
          <button className="bg-[#FF0000] py-3 px-5 rounded-md text-white">
            1
          </button>
          <button className="bg-[#EAF5FF] py-3 px-5 rounded-md ">2</button>
          <button className="bg-[#EAF5FF] py-3 px-5 rounded-md ">3</button>
          <button className="bg-[#EAF5FF] py-3 px-5 rounded-md ">Next</button>
        </div>
      </div> */}
    </div>
  );
};

export default Product;
