import Loader from "@/components/ui/Loader";
import { getCategories, getSubCategories } from "@/lib/actions";
import { cn } from "@/lib/utils";

import React, { useEffect, useState } from "react";

interface Props {
  setCId: React.Dispatch<React.SetStateAction<string>>;
  setSCId: React.Dispatch<React.SetStateAction<string>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  id: string;
  sid: string;
  list:string;
  setList:  React.Dispatch<React.SetStateAction<"bussiness" | "product">>;
  

}
const Filter = ({ id , setCId ,setSearch ,list , setList , setSCId , sid}: Props) => {
  const [cat, setCat] = useState([]);
  const [subCat, setSubCat] = useState([]);
  const fetchAll = async () => {
    const categories = await getCategories("");
    const scategories = await getSubCategories("");
    setCat(categories);
    setSubCat(scategories);
  };
  useEffect(() => {
    fetchAll();
  }, []);

  if (cat.length == 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div className="shadow-xl border p-4 rounded-lg text-[#1C2B38]">
      <h1 className="text-[#1C2B38] border-b font-bold text-xl pb-2">
        Filters
      </h1>
      <div className="flex my-4 rounded-full border">
        <button onClick={()=>setList("bussiness")} className={cn(" p-4 w-[50%] rounded-full " , list== "bussiness" ? "bg-[#082143]  text-white" : "")}>
          Business{" "}
        </button>
        <button onClick={()=>setList("product")} className={cn(" p-4 w-[50%] rounded-full " , list== "product" ? "bg-[#082143]  text-white" : "")}>Products </button>
      </div>
      <div className="flex gap-6 flex-wrap">
        <div className="md:w-[30%]">
          <h3 className="font-bold capitalize text-sm mb-2">keywords</h3>
          <input
            type="text"
            onChange={(e)=>setSearch(e.target.value)}
            className="w-full p-2 border rounded-md bg-gray-100 text-sm px-4 outline-none"
            placeholder="Search"
          />
        </div>
       
        <div className="md:w-[30%]">
          <h3 className="font-bold capitalize text-sm mb-2">Category</h3>
          <select
            defaultValue={id}
            onChange={(e)=>setCId(e.target.value)}
            className="w-full p-2 border rounded-md bg-gray-100 text-sm px-4 outline-none"
          >
              <option value="0" >
              All
            </option>
            {cat?.map(
              (c: { id: string; name: string; image: string }) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              )
            )}
          </select>
        </div>
        <div className="md:w-[30%]">
          <h3 className="font-bold capitalize text-sm mb-2">Sub Category</h3>
          <select
               defaultValue={sid}
               onChange={(e)=>setSCId(e.target.value)}
           className="w-full p-2 border rounded-md bg-gray-100 text-sm px-4 outline-none">
          <option value="0" >
              All
            </option>
            {subCat?.map(
              (c: { id: string; name: string; image: string }) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              )
            )}
          </select>
        </div>
        {/* <button className="md:w-[23%] mt-5 bg-[#FF0000] text-white rounded-full">
          Search
        </button> */}
      </div>
    </div>
  );
};

export default Filter;
