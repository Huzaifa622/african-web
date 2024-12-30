"use client"
import { getBlogs } from "@/lib/actions";

import React, { useEffect, useState } from "react";
import MarketCard from "./MarketCard";

import Loader from "@/components/ui/Loader";
import BlogCard from "@/components/BlogCard";
interface IBlog{
  id:string;
  images:string[];
  title:string;
  short_description:string;

}

const Market = () => {
const [blogs , setBlogs] = useState<IBlog[]>()
const[ loader,setLoader] = useState(false)
  useEffect(()=>{
    const fetchAll=async()=>{
setLoader(true)
const res  = await getBlogs("Marketing")
setBlogs(res)
setLoader(false)
    }
fetchAll()
  },[])
if(loader){
  return  <div className="w-screen">  <Loader/></div>
}
  return (
    <div className="flex flex-col gap-4 text-[#555555]  text-sm leading-[28px] font-Nunito">
      {blogs && blogs.map((b,idx)=>(
        <BlogCard key={idx} b={b} type="market" />
      ))}
      {/* <BusinessCard/> */}
      <div className="flex flex-wrap justify-center gap-4 py-12">
        <MarketCard/>
        <MarketCard/>
        <MarketCard/>
      </div>
    </div>
  );
};

export default Market;
