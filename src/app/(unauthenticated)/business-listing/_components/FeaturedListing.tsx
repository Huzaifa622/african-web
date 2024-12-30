"use client";
import { Plus } from "lucide-react";
import React, {  useEffect, useState } from "react";
import LisitngCard from "./LisitngCard";

import { getListing, getProducts } from "@/lib/actions";
import Loader from "@/components/ui/Loader";
import Link from "next/link";
import { token } from "@/lib/ls";
// import { useQuery } from "@tanstack/react-query";

const FeaturedListing = ({
  id,
  search,
  list,
  subId
}: {
  id: string;
  subId:string;
  search: string;
  list: string;
}) => {
  const [listing, setListing] = useState<
    {
      id: string;
      sub_category_id: string;
      sub_category: { id:string; name:string};
      company_name: string;
      country: string;
      short_description: string;
      category: string ;
      images: string[];
    }[]
  >();

  const [page, setPage] = useState(10);
  // const { data,  isLoading } = useQuery({
  //   queryKey: [id, search, list],
  //   queryFn: async () => await getListing(page, id),
  // });

  // console.log(data, "qurtsd ==============>");

  const fetchAll = async (searchQuery: string) => {
    if (list == "bussiness") {
      const listing = await getListing(page, id , subId);
      console.log(listing);
      const filteredList = listing.data.filter((item: { company_name: string }) =>
        item.company_name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setListing(filteredList);
    } else {
      const listing = await getProducts(page, id, subId);
      const filteredList = listing.filter((item: { title: string }) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setListing(filteredList);
    }
  };
console.log(listing)
  useEffect(() => {
    fetchAll(search);
  }, [id, page, search, list , subId]);
  if (listing?.length == undefined) {
    return (
      <>
        <Loader />
      </>
    );
  }
  return (
    <div>
      <div className="flex flex-wrap justify-between items-center">
        <div className="">
          {" "}
          <h1 className="text-xl font-bold">Featured Listings</h1>
          <h4 className="text-[#778088] text-lg">Showing 1 to {page} Record</h4>
        </div>
        <div className="py-12 flex items-center flex-wrap  gap-4">
          <Link
            href={
              token
                ? `https://aww-provider.dev-um.xyz/?token=${token}`
                : "/register"
            }
            className="bg-[#FF0000] rounded-full p-2 px-3 gap-2 flex text-sm text-white items-center"
          >
            <Plus size={15} /> List Your Business
          </Link>
          {/* <button className="bg-[#082143] rounded-full p-2 px-3 flex gap-2 text-sm text-white items-center">
            <House color="#ffff" size={15} /> List Your Business{" "}
            <StepForward size={10} fill="#ffff" /> Agriculture
          </button> */}
        </div>
      </div>
      <div className="flex md:flex-row flex-col  gap-4">
        <div className="md:w-[100%] flex flex-col gap-4">
          {listing &&
           listing?.length > 0 &&
           listing?.map(
              (l: {
                id: string;
                sub_category_id: string;
                company_name: string;
                country: string;
                short_description: string;
                sub_category:  {id:string; name:string;} ;
                images: string[];
              }) => (
                <LisitngCard
                  key={l.id}
                  list={list}
                  title={l.company_name}
                  country={l.country}
                  short_description={l.short_description}
                  image={l.images[0]}
                  sub_category_name={l.sub_category.name}
                  id={l.id}
                  sub_category_id={l.sub_category_id}
                />
              )
            )}
          {listing.length === 10 && (
            <div>
              <button
                onClick={() => setPage((prev) => prev + 10)}
                className="w-full rounded-full border border-red-500 p-2 text-red-500"
              >
                Show More
              </button>
            </div>
          )}
          {/* <LisitngCard /> */}
          {/* <LisitngCard/>
            <LisitngCard/>
            <LisitngCard/> */}
        </div>
        {/* <div className="w-full md:w-[25%] flex flex-col gap-4">
          <FeaturedListingCard />
          <BuySell />
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedListing;
