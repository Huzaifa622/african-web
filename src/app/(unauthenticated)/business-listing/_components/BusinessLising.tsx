"use client";
import React, { useState } from "react";
import Filter from "./Filter";
import { Mulish } from "next/font/google";
import FeaturedListing from "./FeaturedListing";
// import { useSearchParams } from "next/navigation";


const mulish = Mulish({ subsets: ["latin"] });

const BusinessLising = ({ id  }: { id: string;  }) => {
 
  // const searchParams = useSearchParams();
  // const cat: "bussiness" | "product" = searchParams.get("cat") as
  //   | "bussiness"
  //   | "product";

  const [cId, setCId] = useState<string>(id);
  const [sCId, setSCId] = useState<string>(id);
  const [search, setSearch] = useState<string>("");
  const [list, setList] = useState<"bussiness" | "product">("product");

  return (
    <div
      className={`w-[80%] max-w-screen-2xl mx-auto py-8 ${mulish.className}`}
    >
      <Filter
        id={cId}
        sid={sCId}
        setCId={setCId}
        setSCId={setSCId}
        setSearch={setSearch}
        list={list}
        setList={setList}
      />
      {list == "bussiness" ? (
        <FeaturedListing id={cId} search={search} list={list} subId={sCId} />
      ) : (
        <FeaturedListing id={cId} search={search} list={list} subId={sCId}  />
      )}
    </div>
  );
};

export default BusinessLising;
