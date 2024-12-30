import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { FaReact, FaWix, FaWordpress } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-[#0E1F51] py-12 text-white font-raleway">
      <div className="flex w-[80%] max-w-screen-2xl mx-auto gap-4 flex-wrap">
        <div className="flex flex-col gap-4 md:w-[23%]">
          <Image
            src={"/images/aww.png"}
            width={150}
            height={100}
            alt="logo"
          />
          <p className="text-sm leading-7">
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking at
          </p>
          <div className="flex gap-3">
            <Linkedin
              color="#FF0000"
              size={50}
              className="bg-white rounded-md p-2"
            />
            <Instagram
              color="#FF0000"
              size={50}
              className="bg-white rounded-md p-2"
            />
            <Facebook
              color="#FF0000"
              size={50}
              className="bg-white rounded-md p-2"
            />
            <Twitter
              color="#FF0000"
              size={50}
              className="bg-white rounded-md p-2"
            />
          </div>
        </div>
        <div className="flex flex-col md:w-[23%]">
          <h1 className="text-xl font-bold relative  after:absolute after:w-[15%]  after:h-[4px] after:-bottom-2 after:left-0 after:rounded-full after:bg-[#FF0000] mb-10">
            Services{" "}
          </h1>
          <ul className="flex flex-col gap-3 text-sm text-nowrap">
            <li>Web Design/Development</li>
            <li>App Development</li>
            <li>UI/UX Design</li>
            <li>HubSpot Integration</li>
            <li>Email Marketing</li>
            <li>Website Migration</li>
          </ul>
        </div>
        <div className="flex flex-col md:w-[23%]">
          <h1 className="text-xl font-bold relative  after:absolute after:w-[15%]  after:h-[4px] after:-bottom-2 after:left-0 after:rounded-full after:bg-[#FF0000] mb-10">
            Career{" "}
          </h1>
          <ul className="flex flex-col gap-3 text-sm text-nowrap">
            <li className="flex items-center gap-2">
              <FaReact
                color="#FF0000"
                size={50}
                className="bg-white rounded-md p-2"
              />{" "}
              <div>
                <h3 className="text-[#FF0000] font-bold text-xl">ReactJs Dev.</h3>
                <h3 className="text-xs">1-5 Years of Exp.</h3>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <FaWordpress
                color="#FF0000"
                size={50}
                className="bg-white rounded-md p-2"
              />{" "}
              <div>
                <h3 className="text-[#FF0000] font-bold text-xl">Wordpress Dev.</h3>
                <h3 className="text-xs">1-5 Years of Exp.</h3>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <FaWix
                color="#FF0000"
                size={50}
                className="bg-white rounded-md p-2"
              />{" "}
              <div>
                <h3 className="text-[#FF0000] font-bold text-xl">Python Developer</h3>
                <h3 className="text-xs">1-5 Years of Exp.</h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 md:w-[23%]">
          <h1 className="text-xl font-bold relative  after:absolute after:w-[15%]  after:h-[4px] after:-bottom-2 after:left-0 after:rounded-full after:bg-[#FF0000] mb-5">
            Subscribe Us{" "}
          </h1>
          <div className="text-lg">
            It is a long established fact that a reader will be distracted by
            the readable{" "}
          </div>
          <input className="p-4 rounded-lg text-gray-600  outline-none" placeholder="Email" />
          <button className="bg-[#FF0000] w-[30%] py-3 rounded-sm">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
