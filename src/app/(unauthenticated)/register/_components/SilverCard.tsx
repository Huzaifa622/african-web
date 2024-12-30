
import { Check } from "lucide-react";
import { FaPaypal } from "react-icons/fa";

export default function SilverCard(){
    return(
        <div className="p-8 shadow-xl bg-white w-[300px]">
        <div className="flex flex-col items-center gap-4">
          <h1>Silver Member</h1>
          <div className="p-3 flex justify-center text-[#FF0000] items-center text-3xl rounded-sm font-bold bg-[#FEF3F3] px-20">
            $150
            <span className="text-xl font-normal ml-2 text-[#FF0000]">/year</span>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h4>Features</h4>
            <div className="text-gray-500 capitalize">
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2 border-b w-full ">1 Featured Listing</div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2 border-b w-full">
                  <span className="font-semibold">6 Months</span> Visibility
                </div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2 border-b w-full">
                  {" "}
                  Access to WhatsApp Africa B2B Groups
                </div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2 border-b w-full">
                  {" "}
                  Send Online Messages to{" "}
                  <span className="font-semibold">75 Members</span>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2 border-b w-full">
                  {" "}
                  Access to WhatsApp Africa B2B Groups
                </div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2 border-b w-full">
                  {" "}
                  Upload <span className="font-semibold">8 Product Pictures</span>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2 border-b w-full"> Access to Facebook B2B Group</div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2  w-full"> AI Business Matchmaking - 75 Contacts</div>
              </div>
            </div>
            <button className="rounded-md text-[#FF0000] transition-all ease-linear hover:bg-[#FF0000] hover:text-white flex justify-center items-center p-2 border border-[#FF0000]"> <FaPaypal color="#FF0000" /> Purchase Plan @ $100</button>
          </div>
        </div>
      </div>
    )
}