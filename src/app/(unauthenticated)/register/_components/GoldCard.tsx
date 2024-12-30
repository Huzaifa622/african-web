import { Check } from "lucide-react";
import { FaPaypal } from "react-icons/fa";

export default function GoldCard(){
    return(
        <div className="p-8 shadow-xl bg-white w-[300px]">
        <div className="flex flex-col items-center gap-4">
          <h1>Gold Member</h1>
          <div className="p-3 flex justify-center items-center text-3xl rounded-sm font-bold bg-[#F6F6F6] px-20">
            $200
            <span className="text-xl font-normal ml-2 text-gray-400">/year</span>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <h4>Features</h4>
            <div className="text-gray-500 capitalize">
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2 border-b w-full ">1 Front-Page Featured Listing</div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2 border-b w-full">
                  <span className="font-semibold">1 year</span> Visibility
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
                  <span className="font-semibold">100 Members</span>
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
                  Upload <span className="font-semibold">10 Product Pictures</span>
                </div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2 border-b w-full"> Access to Facebook B2B Group</div>
              </div>
              <div className="flex items-center gap-2 w-full">
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2  w-full"> AI Business Matchmaking - 100 Contacts</div>
              </div>
            </div>
            <button className="rounded-md text-[#FF0000] transition-all ease-linear hover:bg-[#FF0000] hover:text-white flex justify-center items-center p-2 border border-[#FF0000]"> <FaPaypal color="#FF0000" /> Purchase Plan @ $100</button>
          </div>
        </div>
      </div>
    )
}