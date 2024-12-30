import { CalendarRange, UserRound } from "lucide-react";
import Image from "next/image";
import React from "react";



const MarketCard = () => {
  return (
    <div className="w-[230px] font-Nunito">
      <Image src={"/images/p1.png"} alt="pic" width={250} height={200} />
      <div className="py-5 flex flex-col text-sm gap-2 text-[#666666]">
        <h1 className="text-lg text-[#222222]">Shoe Factory Caught Fire</h1>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <CalendarRange color="#666666" size={16} />
            Nov 25, 2024
          </div>
          -
          <div className="flex gap-1 items-center">
            <UserRound color="#666666" size={16} />
            Nodi Blake
          </div>
        </div>
        <p className="leading-[24px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque.
        </p>
        <div className="flex items-center gap-2">
            <div className="w-[60%] h-[2px] bg-gray-300"></div>
            <h1 className="text-[#0E1F51] text-sm font-bold">Read More</h1>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
