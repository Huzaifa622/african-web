import { ChevronsRight, Dot } from "lucide-react";
import React from "react";



const Feautured = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-[#222222]">
        Featured Exporters to Africa
      </h1>
      <div>
        {[...Array(5)].map((_,idx)=>(
        <div key={idx} className="flex gap-10 border-b justify-between text-lg py-4 font-Nunito text-[#666666]">
            <div className="flex items-center gap-2">
        <ChevronsRight color="#666666" />
        Sebang Batteries
        </div>
        <div className="flex items-center ">
        <Dot color="#666666" size={40} />
        (10)
        </div>
        </div>

        ))}
      </div>
    </div>
  );
};

export default Feautured;
