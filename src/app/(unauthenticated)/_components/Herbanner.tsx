import Image from "next/image";

export default function Herobanner() {
  return (
    <div className="bg-[#051d3e]">
      <div className=" h-[580px] relative z-10 max-w-screen-2xl mx-auto">
        <div className="absolute z-20 -top-16 h-[580px]  w-full">
          <Image
            src={"/images/lay.png"}
            alt="lay"
            width={2000}
            height={600}
            className="h-[650px]"
          />
        </div>
        <Image
            src={"/images/elip2.png"}
            alt="lay"
            width={200}
            height={200}
            className="absolute -bottom-20 left-[25%] w-[15%]"
          />
        <div className="flex max-w-screen-2xl flex-wrap items-center h-[600px] justify-center mx-auto  md:gap-32 text-white z-50 relative">
          <div className="w-[90%] pt-12 md:pt-0 md:w-[35%] flex flex-col gap-2 font-raleway md:ml-16 relative">
            <Image src={"/images/elip.png"} alt="elip" width={200} height={200} className="absolute -top-20 -left-24"/>
            <h1 className="text-5xl font-bold">AAW Connecting Africa B2B</h1>
            <h4 className="text-[#FF0000] text-2xl font-semibold ">
             AAW Connecting African buyers with global suppliers since 1992
            </h4>
            <p className="text-xs font-Nunito text-justify">
              {`We have been connecting African buyers with global suppliers since
              1996. We're Africa's leading B2B portal with a comprehensive
              database of African companies and decision-makers.`}
            </p>
            <button className="bg-[#FF0000] font-raleway w-[25%] py-2 rounded-sm text-md mt-8">
              View More
            </button>
          </div>
          <div className="w-[35%]">
            <Image
              src={"/images/banner.svg"}
              alt="girl"
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
