
import PlanCard from "../../_components/ui/PlanCard";
interface Props {
  plans: {
    features: string[];
    id: string;
    is_active: string;
    is_recommended: string;
    name: string;
    period: string;
    period_type: string;
    price: string;
  }[];
}

export default  function Subscription({plans}:Props) {

  return (
    <div className="bg-[#F4F4F4] w-full py-6 border rounded-sm px-6">
      <div className="my-4 py-4 bg-green-50 border border-gray-300 text-center rounded-sm">
        <h1 className="text-3xl  font-bold text-green-700">Thank You!!</h1>
        <p className="text-gray-400 text-sm">
          You are successfully registered with us. Now please select any plan to
          continue.
        </p>
      </div>
      <div className="flex gap-4 justify-center flex-wrap">
        {plans.map((p)=>(

        <PlanCard key={p.id} plan={p} />
        ))}
        {/* <SilverCard />
        <GoldCard /> */}
      </div>
    </div>
  );
}
