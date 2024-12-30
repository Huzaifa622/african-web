import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Section7() {
  return (
    <div className=" bg-bg2 bg-cover bg-no-repeat h-[50%] my-4 font-Nunito text-white">
      <Image
        src={"/images/line.png"}
        alt="line"
        width={1000}
        height={1000}
        className="w-full"
      />
      <div className="flex flex-wrap justify-center w-[80%] mx-auto max-w-screen-2xl py-8">
        <div className="w-[50%]">
          <h1 className="text-4xl mb-8">Join Today For Just $100/year!</h1>
          <div className="flex flex-col gap-4 py-4">
            <p>
              Yes, that’s all you need to pay to gain access to our extensive
              database of buyers in Africa. Deal directly with decision-makers
              and top executives in Africa. Promote your products and services
              in Africa
            </p>
            <p>
              Discover new business opportunities and expand your business
              network in Africa. Invest in your business and take advantage of
              our specialised B2B services
            </p>
          </div>
          <button className="bg-[#FF0000] px-6 py-3 rounded-md flex items-center text-sm" >Join Now <ArrowRight size={16}/></button>
        </div>
        <Image src={"/images/tut.png"} alt="tut" width={500} height={500}/>
      </div>
    </div>
  );
}
