import { Earth, Eye, MapPin, Sprout, Star, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface Props {
  id: string;
  sub_category_id: string;
  title: string;
  list:string;
  country:string;
  short_description: string;
  sub_category_name: string;
  image: string;
}

const LisitngCard = ({
  id,
  sub_category_name,
  title,
  country,
  short_description,
  list,
  image,
}: Props) => {
  return (
    <Link
      href={`/business-detail/${list}?id=${id}`}
      className="border hover:shadow-xl rounded-md p-4"
    >

      <div className="flex md:flex-row flex-col gap-2 items-center justify-center">
      <div className="w-[150px] h-[150px] flex justify-center items-center">
        <Image
          src={`https://aaw.dev-rr.xyz/storage/${image}`}
          alt="ass"
          width={200}
          height={100}
          className="w-[150px]"
        /></div>
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
            <div className="flex items-center ">
              <MapPin fill="#FF0000" color="white" />
              {country}
            </div>
          </div>
          <div className="flex items-center justify-between w-full text-xs">
            <div className="flex items-center font-bold gap-4 text-lg">
              {title}
            </div>
            <div className="flex items-center ">
              <Sprout size={18} color="#FF0000" />
              {sub_category_name}
            </div>
          </div>
          <div className="leading-[23px] text-xs capitalize" dangerouslySetInnerHTML={{__html:short_description}} >
          
          </div>
          <div className="flex items-center text-xs gap-3">
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
    </Link>
  );
};

export default LisitngCard;
