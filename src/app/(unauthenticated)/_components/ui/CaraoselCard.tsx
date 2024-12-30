import Image from "next/image";

export default function CaraouselCard() {
  return (
    <div className="w-[600px] h-[300px] bg-[#F7F7F7] relative p-6 font-raleway rounded-md">
      <Image
        src={"/images/com.png"}
        alt="com"
        width={50}
        height={50}
        className="absolute right-4 top-4"
      />
      <div className="flex flex-col gap-4">
        <Image src={"/images/m.png"} alt="man" width={80} height={80} />
        <p className="text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed.
        </p>
        <h6 className="text-[#FF0000] font-semibold text-sm">Samual Karl</h6>
        <h6 className="text-[#0E1F51] text-sm">CEO</h6>
      </div>
    </div>
  );
}
