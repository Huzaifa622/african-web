"use client"
import BusinessDetail from "../_components/BusinessDetail";
import BusinessDescription from "../_components/BusinessDecription";
import { showListing } from "@/lib/actions"; 
// import { api } from "@/lib/axiosInstance";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/ui/Loader";

// export const revalidate = 10;
// export async function generateStaticParams() {
//   try {
//     const res = await api.get("/listing?perPage=0&category_id=0");
//     console.log(res) 
//     return res.data.listings.map((listing:any) => ({ id: String(listing.id) })); // eslint-disable-line 
//   } catch (error) {
//     console.error("Error fetching listings for static params:", error);
//     return [];
//   }
// }


export default  function Page() {
const params = useSearchParams();
const [list , setList] = useState< 
{
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
}>()
params.get("id")
console.log(params.get("id"))

useEffect(()=>{
  const fetchAll = async () =>{
    const res = await showListing(params.get("id")!); 
setList(res)
  }
  fetchAll()
},[])

  if (!list) {
    return <Loader/>;
  }

  return (
    <div className="w-[80%] py-12 max-w-screen-2xl mx-auto flex flex-col gap-8">
      <BusinessDetail images={list.images} />
      <BusinessDescription list={list} />
    </div>
  );
}

// Generate Static Params
