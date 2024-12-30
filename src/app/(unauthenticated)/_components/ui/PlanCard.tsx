import { checkout } from "@/lib/actions";
import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { FaPaypal } from "react-icons/fa";
interface Props {
  plan: {
    features: string[];
    id: string;
    is_active: string;
    is_recommended: string;
    name: string;
    period: string;
    period_type: string;
    price: string;
  };
}
export default function PlanCard({ plan }: Props) {
  const router = useRouter();
  return (
    <div className="p-8 shadow-xl bg-white w-[300px]">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl">{plan.name}</h1>
        <div className="p-3 flex justify-center items-center text-3xl rounded-sm font-bold bg-[#F6F6F6] w-[100%] ">
          ${plan.price}
          <span className="text-xl font-normal ml-2 text-gray-400">/year</span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4>Features</h4>
          <div className="text-gray-500 capitalize">
            {plan.features.map((f, idx) => (
              <div className="flex items-center gap-2 w-full" key={idx}>
                <Check color="#FF0000" className="mb-1" />
                <div className="py-2 border-b w-full ">{f}</div>
              </div>
            ))}
            {/* <div className="flex items-center gap-2 w-full">
              <Check color="#FF0000" className="mb-1" />
              <div className="py-2 border-b w-full">
                <span className="font-semibold">3 Months</span> Visibility
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
                <span className="font-semibold">50 Members</span>
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
                Upload <span className="font-semibold">5 Product Pictures</span>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <Check color="#FF0000" className="mb-1" />
              <div className="py-2 border-b w-full"> Access to Facebook B2B Group</div>
            </div>
            <div className="flex items-center gap-2 w-full">
              <Check color="#FF0000" className="mb-1" />
              <div className="py-2  w-full"> AI Business Matchmaking - 50 Contacts</div>
            </div> */}
          </div>
          <button
            onClick={async (e: React.SyntheticEvent) => {
              e.preventDefault();
              const res = await checkout({
                plan_id: plan.id,
                success_url:
                  "https://awwupdated.dev-um.xyz/stripe-checkout-success",
                cancel_url:
                  "https://awwupdated.dev-um.xyz/stripe-checkout-cancel",
              });
              router.push(res);
            }}
            className="rounded-md text-[#FF0000] transition-all ease-linear hover:bg-[#FF0000] hover:text-white flex justify-center items-center p-2 border border-[#FF0000]"
          >
            {" "}
            <FaPaypal color="#FF0000" /> Purchase Plan @ ${plan.price}
          </button>
        </div>
      </div>
    </div>
  );
}
