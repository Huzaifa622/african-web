"use client"
import BlogCard from "@/components/BlogCard";
import Loader from "@/components/ui/Loader";
import { getBlogs } from "@/lib/actions";

import React, { useEffect, useState } from "react";
interface IBlog {
  id:string;
  images: string[];
  title: string;
  short_description: string;
}

const Industry =  () => {
  const [blogs , setBlogs] = useState<IBlog[]>()
  const[ loader,setLoader] = useState(false)
    useEffect(()=>{
      const fetchAll=async()=>{
  setLoader(true)
  const res  = await getBlogs("Industry")
  setBlogs(res)
  setLoader(false)
      }
  fetchAll()
    },[])
  if(loader){
    return <div className="w-screen mx-auto" ><Loader/></div>
  }
    
  return (
    <div     className="flex flex-col gap-4">
      {blogs &&
        blogs.map((b, idx) => (
       <BlogCard key={idx} b={b} type="industry" />
        ))}
    </div>
  );
};

export default Industry;
