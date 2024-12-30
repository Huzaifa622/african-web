import Image from "next/image";

export default function Section6() {
  return (
    <div className="w-[80%] max-w-screen-2xl mx-auto gap-6 justify-center py-8 flex flex-wrap font-raleway">
      <div className="relative w-[350px] z-50 text-white flex flex-col items-center gap-8 p-6 pt-20">
        <Image
          src={"/images/girl2.png"}
          alt="girl"
          width={300}
          height={200}
          className="absolute top-0 left-0 w-[350px] z-10"
        />
        <h1 className="text-center px-8 text-2xl z-50 relative">
          Connect Directly with{" "}
          <span className="text-[#FF0000]">Buyers & Sellers</span>
          <br />
          in Africa
        </h1>
        <p className="z-50 relative text-center">Largest African online B2B marketplace,
        connecting buyers with suppliers.</p>
        <button className="w-[50%] py-4 bg-[#FF3E54] z-50 relative rounded-md mt-12">View</button>
      </div>
      <div className="relative w-[350px] z-50 text-white flex flex-col items-center gap-8 p-6 pt-20">
        <Image
          src={"/images/girl2.png"}
          alt="girl"
          width={300}
          height={200}
          className="absolute top-0 left-0 w-[350px] z-10"
        />
        <h1 className="text-center px-8 text-2xl z-50 relative">
          Connect Directly with{" "}
          <span className="text-[#FF0000]">Buyers & Sellers</span>
          <br />
          in Africa
        </h1>
        <p className="z-50 relative text-center">Largest African online B2B marketplace,
        connecting buyers with suppliers.</p>
        <button className="w-[50%] py-4 bg-[#FF3E54] z-50 relative rounded-md mt-12">View</button>
      </div>
      <div className="relative w-[350px] z-50 text-white flex flex-col items-center gap-8 p-6 pt-20">
        <Image
          src={"/images/girl2.png"}
          alt="girl"
          width={300}
          height={200}
          className="absolute top-0 left-0 w-[350px] z-10"
        />
        <h1 className="text-center px-8 text-2xl z-50 relative">
          Connect Directly with{" "}
          <span className="text-[#FF0000]">Buyers & Sellers</span>
          <br />
          in Africa
        </h1>
        <p className="z-50 relative text-center">Largest African online B2B marketplace,
        connecting buyers with suppliers.</p>
        <button className="w-[50%] py-4 bg-[#FF3E54] z-50 relative rounded-md mt-12">View</button>
      </div>
     


    </div>
  );
}
