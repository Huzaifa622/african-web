import React from "react";
import AgentCard from "./AgentCard";


const Agent = () => {
  return (
    <div>
      <div className=" w-full flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold">
          Featured <span className="text-[#FF0000]">Suppliers</span> ?
        </h1>
        <div className="flex flex-wrap justify-center gap-4 py-8 w-[100%] ">
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
          <AgentCard />
        </div>
      </div>
    </div>
  );
};

export default Agent;
