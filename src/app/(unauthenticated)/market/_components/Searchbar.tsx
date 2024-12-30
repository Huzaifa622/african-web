import { Search } from "lucide-react";
import React from "react";



const Searchbar = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-[#222222]">Search</h1>
      <div className="border flex items-center">
        <input className="p-3 w-[85%] outline-none" placeholder="Search"  />
        <div className="w-[2px] h-[30px] bg-gray-200"></div>
        <button className=" w-[10%] px-3">    <Search color="#1A5ABC" /></button>
      </div>
    </div>
  );
};

export default Searchbar;
