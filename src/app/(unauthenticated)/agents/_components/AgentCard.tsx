import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";



const AgentCard = () => {
  return (
    <div className="w-[280.6px] hover:shadow-2xl flex flex-col border rounded-lg">
      <Image
        src={"/images/image.png"}
        alt="image"
        width={320.6}
        height={533.23}
      />
      <div className="p-4">
        <h5 className="text-sm font-semibold mb-3">Exedy Middle Ea</h5>
        <div className="flex flex-col gap-2 mb-3">
            <h2 className="text-xl font-bold">Supplier of all kinds of gym equipment,</h2>
            <p className="text-sm">Exedy Middle East FZCO manufactures a complete range of clutch and transmission solutions for a wide range of automobiles and machinery. Exedy clutches are in high demand in Africa.</p>
        </div>
        <button className="text-md font-bold flex items-center gap-2">Read Story <ArrowRight size={16} color="#043A53" /></button>
      </div>
    </div>
  );
};

export default AgentCard;
