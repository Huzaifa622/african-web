import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props{
    b: {
        id:string;
        images: string[];
        title: string;
        short_description: string;
      } ,
      type:string;
      
}

export default function BlogCard({b , type}:Props) {
  return (
    <Link href={`/${type}/blog/id=${b.id}`}  className=" font-raleway drop-shadow-xl text-black text-base transition-all ease-linear  rounded-sm border hover:shadow-xl">
     
      <Image
        src={`https://aaw.dev-rr.xyz/storage/${b.images[0]}`}
        alt="image"
        width={1200}
        height={200}
        className="rounded-t-sm"
      />
      <div className="p-3">
      <h4 className="py-2 text-2xl font-bold">{b.title}</h4>
      <p>{b.short_description}</p>
      </div>
    </Link>
  );
}
