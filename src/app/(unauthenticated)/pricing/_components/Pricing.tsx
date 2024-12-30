import { Switch } from "@/components/switch";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const Pricing = () => {
  return (
    <div className="text-center py-8">
      <h1 className="uppercase text-[#FF0000] text-sm font-bold mb-3">
        Pricing
      </h1>
      <h1 className="text-[#170F49] text-3xl font-bold mb-2">
        Simple, transparent pricing
      </h1>
      <p className="mx-auto text-center md:w-[50%] text-[#6F6C90] mb-10">
        Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel
        venenatis eu sit massa volutpat.
      </p>
      <div className="flex items-center justify-center text-sm space-x-2 mb-20">
        <label htmlFor="airplane-mode">Monthly</label>
        <Switch />
        <label htmlFor="airplane-mode">Annually</label>
      </div>
      <div className="flex justify-center gap-4 flex-wrap">
        <div className="p-8 border  shadow-xl rounded-xl w-[300px] items-start text-start flex flex-col gap-4">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-[#ECEBFF] p-2 rounded-lg">
              <Image src={"/images/i1.png"} alt="as" width={40} height={50} />
            </div>
            <div className="text-start">
              <h4 className="text-sm text-[#6F6C90]">For individuals</h4>
              <h4 className="text-lg font-bold">For individuals</h4>
            </div>
          </div>
          <p className="leading-[30px] text-[#6F6C90] text-start text-sm">
            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
            elit.{" "}
          </p>
          <div className="flex items-end gap-3">
            <h1 className="text-[#170F49] text-5xl font-bold"> $99</h1>
            <h4 className="text-sm text-[#6F6C90] pb-2">/monthly</h4>
          </div>
          <h1 className="text-[#170F49] text-lg font-bold">What’s included</h1>
          <div className="flex flex-col gap-3 text-sm text-[#170F49]">
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              All analytics features
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              Up to 250,000 tracked visits
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              Normal support
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              Up to 3 team members
            </div>
          </div>
          <Link href={"/business-listing"} className="bg-[#0E1F51] w-full text-white text-center py-4 rounded-full">Get started</Link>
        </div>
        <div className="p-8 border-[#FF0000] bg-[#FF0000] mt-[-30px] mb-[30px] text-white  shadow-xl rounded-xl w-[300px] items-start text-start flex flex-col gap-4">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-white p-2 rounded-lg">
              <Image src={"/images/i2.png"} alt="as" width={40} height={50} />
            </div>
            <div className="text-start">
              <h4 className="text-sm ">For individuals</h4>
              <h4 className="text-lg font-bold">For individuals</h4>
            </div>
          </div>
          <p className="leading-[30px]  text-start text-sm">
            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
            elit.{" "}
          </p>
          <div className="flex items-end gap-3">
            <h1 className="text-5xl font-bold"> $99</h1>
            <h4 className="text-sm  pb-2">/monthly</h4>
          </div>
          <h1 className=" text-lg font-bold">What’s included</h1>
          <div className="flex flex-col gap-3 text-sm ">
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              All analytics features
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              Up to 250,000 tracked visits
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              Normal support
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              Up to 3 team members
            </div>
          </div>
          <Link href={"/business-listing"} className="bg-white text-center w-full text-[#0E1F51] py-4 rounded-full">Get started</Link>
        </div>
        <div className="p-8 border  shadow-xl rounded-xl w-[300px] items-start text-start flex flex-col gap-4">
          <div className="flex items-center justify-start gap-4">
            <div className="bg-[#ECEBFF] p-2 rounded-lg">
              <Image src={"/images/i3.png"} alt="as" width={40} height={50} />
            </div>
            <div className="text-start">
              <h4 className="text-sm text-[#6F6C90]">For individuals</h4>
              <h4 className="text-lg font-bold">For individuals</h4>
            </div>
          </div>
          <p className="leading-[30px] text-[#6F6C90] text-start text-sm">
            Lorem ipsum dolor sit amet doloroli sitiol conse ctetur adipiscing
            elit.{" "}
          </p>
          <div className="flex items-end gap-3">
            <h1 className=" text-5xl font-bold"> $199</h1>
            <h4 className="text-sm  pb-2">/monthly</h4>
          </div>
          <h1 className=" text-lg font-bold">What’s included</h1>
          <div className="flex flex-col gap-3 text-sm ">
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              All analytics features
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              Up to 250,000 tracked visits
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              Normal support
            </div>
            <div className="flex gap-2 items-center">
              <CircleCheck color="white" fill="#FF0000" />
              Up to 3 team members
            </div>
          </div>
          <Link href={"/business-listing"  } className="bg-[#0E1F51] text-center w-full text-white py-4 rounded-full">Get started</Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
