"use client"
// import FeaturedListingCard from "@/components/FeaturedListingCard";
import Image from "next/image";
import { useState } from "react";
// import FeaturedListing from "../../business-listing/_components/FeaturedListing";

// const images = [
//     "/images/o7.png",
//     "/images/o1.png",
  
//     "/images/o6.png",
//     "/images/o4.png",
//     "/images/o5.png",
// ]
interface Props{
  images: string[];
}
export default function BusinessDetail({images}:Props) {
    const [image , setImage] = useState<string>(images[0])
  return (
    <div className=" ">
      <div className="flex md:flex-row justify-center flex-col gap-4">
        <div className="md:w-[70%] ">
          <div className="flex items-center gap-12">
            <div className="flex flex-col gap-4">
                {images.map((i,idx)=>(
                    <Image key={idx} src={`https://aaw.dev-rr.xyz/storage/${i}`} alt="idx" width={100} height={100} onClick={()=>setImage(i)} />
                ))}
            </div>
            <div className="flex justify-center items-center w-[700px]">
                <Image src={`https://aaw.dev-rr.xyz/storage/${image}`} alt="img" width={700} height={500} />
            </div>
          </div>
        </div>
        {/* <div className="md:w-[30%] py-12">
          <FeaturedListingCard />
        </div> */}
      </div>
    </div>
  );
}
