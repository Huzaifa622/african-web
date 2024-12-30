import { BookA, Flame, Star } from "lucide-react";
import Image from "next/image";


export default function AgentSidebar() {
  return (
    <div className="">
     
      <div className="flex flex-col mb-4">
        <div className="flex flex-wrap gap-[0.9px] text-xs w-full">
          <button className="flex items-center gap-1 text-nowrap border border-red-600 bg-white rounded-t-md p-2">
            <Star size={10} color="#FF0000" fill="#FF0000" /> Featured Companies
          </button>
          <button className="flex items-center gap-1 text-nowrap bg-gray-200 rounded-t-md p-2">
            <Flame color="#FF0000" fill="#FF0000" size={12} /> Popular
          </button>
          <button className="flex items-center gap-1 text-nowrap bg-gray-200 rounded-t-md p-2">
            <BookA color="#FF0000" size={12} /> Leads
          </button>
        </div>
        <div className=" border w-full">
          <div className="p-2 flex items-start gap-2 border-t py-4">
            <Image
              src={"/images/ss.png"}
              alt="ss"
              width={50}
              height={50}
              className="border"
            />
            <div>
              <h4 className="text-sm font-bold mb-1">Al Shirawi Enterprises</h4>
              <p className="text-xs text-[#888888]">
                Distributor for Scania in the UAE since 1981. Supplier of
                genuine spare parts for trucks, busesand marine and industrial
                engines...
              </p>
            </div>
          </div>
          <div className="p-2 flex items-start gap-2 border-t py-4">
            <Image
              src={"/images/ss.png"}
              alt="ss"
              width={50}
              height={50}
              className="border"
            />
            <div>
              <h4 className="text-sm font-bold mb-1">Al Shirawi Enterprises</h4>
              <p className="text-xs text-[#888888]">
                Distributor for Scania in the UAE since 1981. Supplier of
                genuine spare parts for trucks, busesand marine and industrial
                engines...
              </p>
            </div>
          </div>
          <div className="p-2 flex items-start gap-2 border-t py-4">
            <Image
              src={"/images/ss.png"}
              alt="ss"
              width={50}
              height={50}
              className="border"
            />
            <div>
              <h4 className="text-sm font-bold mb-1">Al Shirawi Enterprises</h4>
              <p className="text-xs text-[#888888]">
                Distributor for Scania in the UAE since 1981. Supplier of
                genuine spare parts for trucks, busesand marine and industrial
                engines...
              </p>
            </div>
          </div>
          <div className="p-2 flex items-start gap-2 border-t py-4">
            <Image
              src={"/images/ss.png"}
              alt="ss"
              width={50}
              height={50}
              className="border"
            />
            <div>
              <h4 className="text-sm font-bold mb-1">Al Shirawi Enterprises</h4>
              <p className="text-xs text-[#888888]">
                Distributor for Scania in the UAE since 1981. Supplier of
                genuine spare parts for trucks, busesand marine and industrial
                engines...
              </p>
            </div>
          </div>
        </div>
      </div>
      
  
    </div>
  );
}
