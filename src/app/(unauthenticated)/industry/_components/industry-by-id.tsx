"use client";
import Loader from "@/components/ui/Loader";

import { api } from "@/lib/axiosInstance";
import Image from "next/image";


import { useEffect, useState } from "react";
interface IBlog {
  images: string[];
  description: string;
}
export default function IndsutryById(id:{id:string}) {
  

  const [loader, setLoader] = useState(false);

  const [blog, setBlog] = useState<IBlog>();

  const getBlogsById = async (name: string, id: string) => {
    setLoader(true);
    try {
      const res = await api.get(`/blog/${id}?type=${name}`);
      console.log(res.data);
      setBlog(res.data.blog);
      setLoader(false);
      return;
    } catch (error: any) { // eslint-disable-line
        setLoader(false);
      throw new Error(error.message);
    }

  };

  useEffect(() => {
    getBlogsById("industry", String(id.id));
  }, []);
  if (loader) {
    return <Loader />;
  }

  return (
    <div>
      <Image
        src={`https://aaw.dev-rr.xyz/storage/${blog?.images[0]}`}
        className="pb-4"
        alt="blog"
        width={1200}
        height={500}
      />
      <div dangerouslySetInnerHTML={{ __html: blog?.description! }}></div>{" "} {/* eslint-disable-line */}
     
    </div>
  );
}
