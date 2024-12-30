import Image from "next/image";

export default function Section4() {
  return (
    <div className="bg-gradient-to-t from-black to-[#0E1F51] font-raleway text-white ">
      <div className="flex flex-col gap-6 w-[80%] max-w-screen-2xl mx-auto py-12">
        <h1 className="text-4xl font-bold text-center">
          Looking to expand into African markets? <br /> Join AAW Connecting Africa B2B Club
          and post your company listing and product pictures and get noticed by
          African buyers...
        </h1>
        <div className="flex flex-wrap gap-8 items-center">
          <Image src={"/images/rbt.png"} alt="image" width={500} height={500} className="md:w-[40%]" />
          <div className="flex flex-col gap-8 md:w-[50%]">
            <h3 className="text-3xl text-white">
              Reach buyers in Africa through our Artificial Intelligent Business
              Matchmaking algorithm
            </h3>
            <p className="text-lg">
              As a member of the Africa B2B Club you will get direct access to
              buyers in Africa looking for suppliers. Africa B2B Club connects
              African importers with global suppliers through various digital
              marketing verticals
            </p>
            <p  className="text-lg">

              Expand your sales and marketing network in the African markets
              from the convenience of your desktop and smart phone great?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
