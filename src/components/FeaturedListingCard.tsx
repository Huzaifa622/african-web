import { MapPin } from "lucide-react";
import React from "react";



const FeaturedListingCard = () => {
  return (
    <div className="rounded-md ">
      <h1 className="text-white p-4 bg-[#082143] rounded-t-md text-xl">Featured Listings</h1>
      <div className="bg-[#F9F9F9] p-4">
        <div className="bg-white p-4 flex flex-col gap-1 border-b">
          <h1 className="text-sm font-semibold">SEMINIS EAST AFRICA</h1>
          <div className="flex items-center gap-1 text-xs  text-[#888888]">
            <MapPin fill="#888888" color="white" size={15}/>
            Nairobi, Kenya
          </div>
          <div className="flex items-center gap-1 text-xs text-[#FF0000]">
            <MapPin fill="#888888" color="white" size={15}/>
           Agriculture
          </div>
        </div>
        <div className="bg-white p-4 flex flex-col gap-1 border-b">
          <h1 className="text-sm font-semibold">SEMINIS EAST AFRICA</h1>
          <div className="flex items-center gap-1 text-xs  text-[#888888]">
            <MapPin fill="#888888" color="white" size={15}/>
            Nairobi, Kenya
          </div>
          <div className="flex items-center gap-1 text-xs text-[#FF0000]">
            <MapPin fill="#888888" color="white" size={15}/>
           Agriculture
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListingCard;
