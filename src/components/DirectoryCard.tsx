import { Dot } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";
const poppins = Poppins({ weight: "400" , subsets:["latin"] });


const DirectoryCard = () => {
  return (
    <div className={`${poppins.className} w-[240px] relative`}>
      <div className="absolute top-3 right-3 bg-[#E97171] rounded-full w-8 h-8 text-xs text-center flex justify-center items-center text-white">
        -50%
      </div>
      <Image src={"/images/chair.png"} alt="chair" width={240} height={200} />
      <div className="p-2 flex flex-col gap-3 bg-[#F4F5F7]">
        <div className="flex flex-col gap-2">
          <h1 className=" font-bold text-[#3A3A3A] text-xl">Algeria Business</h1>
          <div className=" text-[#898989] text-xs">
            <div className="flex items-center gap-2">
              <Dot color="#666666" size={12} />
              <h4 className="text-sm">Algeria Business Directory</h4>
            </div>

            <div className="flex items-center gap-2">
              <Dot color="#666666" size={12} />
              <h4 className="text-sm">Algeria Business Directory</h4>
            </div>
            <div className="flex items-center gap-2">
              <Dot color="#666666" size={12} />
              <h4 className="text-sm">Over 10,000 listings</h4>
            </div>
          </div>
          <div className="flex items-center justify-between py-2">
            <h1 className="text-xl font-bold text-[#3A3A3A]">Rp 7.000.000</h1>
            <h1 className="text-xs font-bold  line-through  text-[#B0B0B0]">
              Rp 14.000.000
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryCard;
