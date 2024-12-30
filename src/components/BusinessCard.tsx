import { Flag } from "lucide-react";
import Image from "next/image";
import React from "react";



const BusinessCard = () => {
  return (
    <div className="leading-[28px] font-Nunito text-[#555555]">
      <Image
        src={"/images/brig.png"}
        alt="brigadier"
        width={1000}
        height={1000}
        className="w-full mb-4"
      />
      <p>
        Rescue missions in cold, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariaturLorem ipsum dolor sit
        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
      <div className="border-t border-b py-5 text-xs font-bold flex flex-wrap gap-4 justify-between">
        <div className="flex items-center gap-5">
            <div className="flex items-center gap-1"><Flag color="#FF0000" fill="#FF0000" size={12}/><h4 className="text-sm">Africa Business Report</h4></div>
            <div className="w-[2px] bg-black h-[15px]"></div>
            <h4 className="text-sm">Filed Under Africa Business Pages</h4>
            <div className="w-[2px] bg-black h-[15px]"></div>
            <h4 className="text-sm">Business in Africa</h4>
        </div>
            <div className="flex items-center gap-1">Tags: <button className="bg-[#0E1F51] rounded-sm py-2 px-4 text-white">Read More</button></div>
      </div>
    </div>
  );
};

export default BusinessCard;
