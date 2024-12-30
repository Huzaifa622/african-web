import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Section5() {
  return (
    <div className="bg-bg  bg-cover bg-no-repeat">
      <div className="flex flex-col justify-center items-center w-[80%] max-w-screen-2xl mx-auto py-12 gap-4">
        <h1 className="text-[#333333] text-4xl text-center font-Nunito">
          Your <span className="font-bold">Company Listing</span> on AAW Connecting Africa
          Business Pages helps African buyers connect with you directly
        </h1>
        <div className="flex flex-col gap-4 text-[#777777] font-raleway text-center text-sm">
          <p>
            Upload upto 10 product pictures along with your company profile and
            make it easier for your potential buyers to reach you easily and
            know about your company and products. Buyers will then be able to
            contact your directly through our online personal messaging system
            as well as send you business inquiries through email.
          </p>
          <p>
            Once your company in listed in Africa Business Pages, your
            organisation will get higher ranking in search engine results. This
            further helps potential buyers to reach you. By having your company
            listed in Africa Business Pages and displaying your products
            (allowed upto 10 product pictures) will help you get qualified
            business leads from Africa.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <h1 className="text-[#333333] text-3xl font-Nunito">
            Who should join the AAW Africa B2B CLub?
          </h1>
          <div className="flex flex-wrap items-center justify-center">
            <div className="md:w-[25%] text-right font-Nunito flex flex-col gap-4">
              <div className="">
                <div className="mb-4">
                  <h4 className="text-2xl text-[#333333] font-semibold">
                    Traders
                  </h4>
                  <h6 className="text-lg text-[#666666]">Few Examples</h6>
                </div>
                <ul className=" text-right text-[#666666] text-sm">
                  <li className="flex justify-end items-center">
                    Auto Parts <ChevronLeft size={15} />{" "}
                  </li>
                  <li className="flex justify-end items-center">
                    Cosmetics & Beauty <ChevronLeft size={15} />{" "}
                  </li>
                  <li className="flex justify-end items-center">
                    Stationery & Paper <ChevronLeft size={15} />{" "}
                  </li>
                  <li className="flex justify-end items-center">
                    Tyres & Batteries <ChevronLeft size={15} />{" "}
                  </li>
                  <li className="flex justify-end items-center">
                    Electronics <ChevronLeft size={15} />{" "}
                  </li>
                  <li className="flex justify-end items-center">
                    Hotel Supplies <ChevronLeft size={15} />{" "}
                  </li>
                </ul>
              </div>
              <div>
                <div className="mb-4">
                  <h4 className="text-2xl text-[#333333] font-semibold">
                    Wholesalers
                  </h4>
                  <h6 className="text-lg text-[#666666]">Few Examples</h6>
                </div>
                <ul className=" text-right text-[#666666] text-sm">
                  <li className="flex justify-end items-center">
                    Packaging & Plastics <ChevronLeft size={15} />{" "}
                  </li>
                  <li className="flex justify-end items-center">
                    Perfumes <ChevronLeft size={15} />{" "}
                  </li>
                  <li className="flex justify-end items-center">
                    Pharmaceuticals <ChevronLeft size={15} />{" "}
                  </li>
                  <li className="flex justify-end items-center">
                    Building Materials <ChevronLeft size={15} />{" "}
                  </li>
                  <li className="flex justify-end items-center">
                    Lubricants <ChevronLeft size={15} />{" "}
                  </li>
                  <li className="flex justify-end items-center">
                    Foodstuff <ChevronLeft size={15} />{" "}
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-[50%] px-12">
              <Image
                src={"/images/aww1.png"}
                alt="map"
                width={700}
                height={500}
              />
            </div>
            <div className="md:w-[25%] text-left font-Nunito flex flex-col gap-4">
              <div className="">
                <div className="mb-4">
                  <h4 className="text-2xl text-[#333333] font-semibold">
                    Manufacturers
                  </h4>
                  <h6 className="text-lg text-[#666666]">Few Examples</h6>
                </div>
                <ul className="text-left  text-[#666666] text-sm">
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    Furniture
                  </li>
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    Chemicals
                  </li>
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    Heavy Machinery
                  </li>
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    Sports Goods
                  </li>
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    School Stationery
                  </li>
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    Security Apparatus
                  </li>
                </ul>
              </div>
              <div>
                <div className="mb-4">
                  <h4 className="text-2xl text-[#333333] font-semibold">
                    Exporters
                  </h4>
                  <h6 className="text-lg text-[#666666]">Few Examples</h6>
                </div>
                <ul className=" text-left text-[#666666] text-sm">
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    Home Appliances
                  </li>
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    Kitchen Equipment
                  </li>
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    Used Cars
                  </li>
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    Medical Equipment
                  </li>
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    Used Computers
                  </li>
                  <li className="flex justify-start items-center">
                    {" "}
                    <ChevronRight size={15} />
                    Apparel & Clothing
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
