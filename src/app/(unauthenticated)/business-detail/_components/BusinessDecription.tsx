import { ChevronRight, Earth, Eye, MapPin, Sprout, Star, Trash2 } from "lucide-react";
import Image from "next/image";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";
interface Props {
  list: {
    id: string;
    category_id: string;
    company_name: string;
    annual_revenue: string;
    number_of_employees: string;
    country: string;
    operating_hours: string;
    registration_number: string;
    ecommerce_presence: string;
    other_locations: string;
    head_office_address: string;
    csr_initiatives: string;
    website_url: string;
    business_size: string;
    year_established: string;
    industry: string;
    key_clientele_industry_focus: string;
   
    export_import_capability: string;
    date_last_updated: string;
    ownership_type: string;
    social_media_handles: string[];
    key_products: string[];
    technological_adoption: string[];
    certifications: string[];
    recent_news_articles: string[];
    key_services: string[];
    // key_clientele_industry_focus: string;
    partnerships_or_affiliations: string;
    research_references: string;
    sub_category:  {id:string; name:string} ;
    images: string[];
  };
  // contact: {phone:string ; email:string; address:string;};
}
export default function BusinessDescription({ list  }: Props) {
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
            <div className="flex items-center ">
              <MapPin fill="#FF0000" color="white" />
              {list.country}
            </div>
          </div>
          <div className="flex items-center justify-between w-full text-xs">
            <div className="flex items-center font-bold gap-4 text-lg">
              {list.company_name}
            </div>
            <div className="flex items-center ">
              <Sprout size={18} color="#FF0000" />
              {list.sub_category.name}
            </div>
          </div>
          <div
            className="leading-[23px] html text-xs capitalize"
            // dangerouslySetInnerHTML={{ __html: list.short_description }}
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
        // dangerouslySetInnerHTML={{ __html: list.description }}
      >
         <div> Number of Employees <span className="font-bold">     {list.number_of_employees}</span></div>
         <div> registration number <span className="font-bold">     {list.registration_number}</span></div>
         <div> business size <span className="font-bold">     {list.business_size}</span></div>
         <div> year established <span className="font-bold">     {list.year_established}</span></div>
         <div> idustry <span className="font-bold">     {list.industry}</span></div>
         <div> head office address <span className="font-bold">     {list.head_office_address}</span></div>
         <div> other locations <span className="font-bold">     {list.other_locations}</span></div>
         <div> Annual Revenue <span className="font-bold">     {list.annual_revenue}</span></div>
         <div> Operating Hours <span className="font-bold">     {list.operating_hours}</span></div>
         <div> Ecommerce Presence <span className="font-bold">     {list.ecommerce_presence}</span></div>
         <div> key clientele industry focus <span className="font-bold">     {list.key_clientele_industry_focus}</span></div>
         <div> partnerships or affiliations <span className="font-bold">     {list.partnerships_or_affiliations}</span></div>
         <div> research references <span className="font-bold">     {list.research_references}</span></div>
         <div> export import capability <span className="font-bold">     {list.export_import_capability}</span></div>
         <div> ownership type <span className="font-bold">     {list.ownership_type}</span></div>
         <div> cSR initiatives <span className="font-bold">     {list.csr_initiatives}</span></div>
         <div> website uRL <span className="font-bold">     {list.website_url}</span></div>
         <h4 className="font-bold mt-2">Social Media </h4>
         <div>{list.social_media_handles.map((s)=>(
           <div key={s} >{s}</div>
          ))}</div>
          <h4 className="font-bold mt-2">Key Services </h4>
          <div>{list.key_services.map((s)=>(
            <div key={s} className="flex items-center" ><ChevronRight size={12}/>{s}</div>
          ))}</div>
          {/* <h4 className="font-bold mt-2">Contact Info</h4>
          <div> Phone <span className="font-bold">     {contact.phone}</span></div>
          <div> Email <span className="font-bold">     {contact.email}</span></div>
          <div> Address <span className="font-bold">     {contact.address}</span></div> */}
          <h4 className="font-bold mt-2">Recent News Article</h4>
          <div>{list.recent_news_articles.map((s)=>(
            <div key={s} className="flex items-center" ><ChevronRight size={12}/>{s}</div>
          ))}</div>
          <h4 className="font-bold mt-2">Technological Adoption</h4>
          <div>{list.technological_adoption.map((s)=>(
            <div key={s} className="flex items-center" ><ChevronRight size={12}/>{s}</div>
          ))}</div>
          <h4 className="font-bold mt-2">Key Products</h4>
          <div>{list.key_products.map((s)=>(
            <div key={s} className="flex items-center" ><ChevronRight size={12}/>{s}</div>
          ))}</div>
          <h4 className="font-bold mt-2">Certifications</h4>
          <div>{list.certifications.map((s)=>(
            <div key={s} className="flex items-center" ><ChevronRight size={12}/>{s}</div>
          ))}</div>
          {/* <h4 className="font-bold mt-2">Date</h4> */}
          <div> Date <span className="font-bold mt-4">     {list.date_last_updated}</span></div>

      </div>
    </div>
  );
}
