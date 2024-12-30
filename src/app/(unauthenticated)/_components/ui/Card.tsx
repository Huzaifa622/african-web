import { cn } from "@/lib/utils";

export default function Card({
  icon,
  title,
  para,
  num,
  className
}: {
  icon: any; // eslint-disable-line
  title: string;
  para: string;
  num?:string;
  className? :string
}) {
  return (
    <div className={cn("bg-[#F7F7F7] p-8  rounded-lg w-[300.67px] relative" , className)}>
        <div className="absolute right-4 top-4 text-gray-300 text-5xl font-bold">{num}</div>
      <div className="flex flex-col gap-4">
        <div className="bg-white w-[35%] flex justify-center items-center rounded-md  py-4">{icon}</div>
        <div className="flex gap-4 items-center">
          {" "}
          <div className="w-[20%] h-[5px] rounded-full bg-[#FF0000]"></div>{" "}
          <div className="w-[10%] h-[5px] rounded-full bg-[#FF0000]"></div>
        </div>
        <div className="text-[#0E1F51] font-bold text-xl ">{title}</div>
        <div className="pr-4 font-semibold">{para}</div>
      </div>
    </div>
  );
}
