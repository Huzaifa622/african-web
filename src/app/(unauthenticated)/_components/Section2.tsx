"use client";
import { getCategories } from "@/lib/actions";
import IconCard from "./ui/IconCard";
// import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Alphabets } from "@/lib/constant";

export default function Section2() {
  const [categories, setCategories] = useState<[]>();
  const [alpha, setAlpha] = useState<string>("a");
  // const categories = await getCategories()
  const fetchAll = async () => {
    const cat = await getCategories(alpha);
    setCategories(cat);
  };
  useEffect(() => {
    fetchAll();
  }, [alpha]);
  return (
    <div className="bg-[#F5F9FB] py-12">
      <div className="w-[80%] max-w-screen-2xl mx-auto mb-8 flex justify-end uppercase">
        <Select onValueChange={(e) => setAlpha(e)}>
          <SelectTrigger className="w-[180px] uppercase">
            <SelectValue placeholder={alpha} className="uppercase" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {Alphabets.map((a, idx) => (
                <SelectItem
                  key={idx}
                  value={a}
                  className="uppercase hover:bg-gray-300 cursor-pointer"
                >
                  {a}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="w-[80%] 2xl:w-[60%] max-w-screen-2xl mx-auto flex justify-center flex-wrap gap-4">
        {categories && categories?.length > 0 ? (
          <>
            {" "}
            {categories?.map(
              (c: { id: string; name: string; image: string }) => (
                <IconCard src={c.image} id={c.id} title={c.name} key={c.id} />
              )
            )}
          </>
        ) : (
          <div className="flex flex-wrap gap-4">
            <Skeleton className="h-20 w-20 bg-gray-200" />
            <Skeleton className="h-20 w-20 bg-gray-200" />
            <Skeleton className="h-20 w-20 bg-gray-200" />
            <Skeleton className="h-20 w-20 bg-gray-200" />
            <Skeleton className="h-20 w-20 bg-gray-200" />
            <Skeleton className="h-20 w-20 bg-gray-200" />
          </div>
        )}

        {/* <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/>
                <IconCard src="/images/icon.png" title="Computers & IT"/> */}
      </div>
    </div>
  );
}
