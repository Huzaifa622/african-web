"use client"

import {  showProduct } from "@/lib/actions";
import BusinessDetail from "../_components/BusinessDetail";
// import BusinessDescription from "../_components/BusinessDecription";
// import { api } from "@/lib/axiosInstance";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import BusinessDescriptionProduct from "../_components/BusinessDecriptionProduct";
import Loader from "@/components/ui/Loader";
// export const revalidate = 10;
// export async function generateStaticParams() {
//   try {
//     const res = await api.get("/product?perPage=0&category_id=0");
    
//   const p = res.data.products.map((listing:any) => ({ id: String(listing.id) })); // eslint-disable-line 
//   console.log(p)
//     return p;
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
    images: string[];
    sub_category_id: string;
    sub_category: {name:string}
    user_id: string;
    provider_type_id: string;
    title: string;
    short_description: string;
    description: string;
}>()
params.get("id")
console.log(params.get("id"))

useEffect(()=>{
  const fetchAll = async () =>{
    const res = await showProduct(params.get("id")!); 
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
      <BusinessDescriptionProduct list={list} />
    </div>
  );
}



