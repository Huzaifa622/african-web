import {  Earth, Eye, Sprout, Star, Trash2 } from "lucide-react";
import Image from "next/image";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
interface Props {
  list:  {
    id: string;
    images: string[];
    sub_category_id: string;
    user_id: string;
    sub_category: {name:string}
    provider_type_id: string;
    title: string;
    short_description: string;
    description: string;
}}
export default function BusinessDescriptionProduct({ list  }: Props) {
  console.log(list)
  return (
    <div className="bg-[#F8FAFC] rounded-lg shadow-xl p-6 ">
      <div className="flex md:flex-row flex-col justify-center items-center  gap-2">
        <Image
          src={`https://aaw.dev-rr.xyz/storage/${list.images[0]}`}
          alt="ass"
          width={200}
          height={100}
        />
        <div className="w-full flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between w-full text-xs">
            <div className="flex flex-wrap items-center gap-4 text-xs">
              <button className="bg-[#FF0000] text-white text-xs p-1 px-12 rounded-full">
                Featured
              </button>
              <div className="w-[2px] h-[15px] bg-gray-200"></div>
              <div className="flex items-center gap-2 text-[#778088]">
                <Star fill="#CFD9DE" size={15} /> (Add to favorite list)
              </div>
            </div>
            {/* <div className="flex items-center ">
              <MapPin fill="#FF0000" color="white" />
              {list.country}
            </div> */}
          </div>
          <div className="flex items-center justify-between w-full text-xs">
            <div className="flex items-center font-bold gap-4 text-lg">
              {list.title}
            </div>
            <div className="flex items-center ">
              <Sprout size={18} color="#FF0000" />
              {list.sub_category.name}
            </div>
          </div>
          <div
            className="leading-[23px] html text-xs capitalize"
            dangerouslySetInnerHTML={{ __html: list.short_description }}
          >
           
          </div>
          <div className="flex flex-wrap items-center text-xs gap-3">
            {" "}
            <div className="flex items-center gap-2 text-[#778088]">
              <Eye color="#495560" size={15} /> Read More
            </div>
            <div className="w-[2px] h-[15px] bg-gray-200"></div>
            <div className="flex items-center gap-2 text-[#778088]">
              <Trash2 color="#495560" size={15} /> Send Email
            </div>
            <div className="w-[2px] h-[15px] bg-gray-200"></div>
            <div className="flex items-center gap-2 text-[#778088]">
              <Earth color="#495560" size={15} /> Companies in Africa
            </div>
            <div className="w-[2px] h-[15px] bg-gray-200"></div>
            <FaWhatsapp color="#495560" size={18} />
          </div>
        </div>
      </div>
      <div
        className="capitalize font-Nunito py-4 bg-[#F8FAFC] html text-[#495560]"
        dangerouslySetInnerHTML={{ __html: list.description }}
      >
       
      </div>
    </div>
  );
}
