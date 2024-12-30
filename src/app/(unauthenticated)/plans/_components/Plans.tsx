"use client"

import PlanCard from "../../_components/ui/PlanCard";
interface Props {
    plans:{
        features: string[];
        id: string;
        is_active: string;
        is_recommended: string;
        name: string;
        period: string;
        period_type: string;
        price: string;
    }[]

}
export default  function Plans({plans}:Props) {

  return (
    <div className="flex gap-4 justify-center flex-wrap py-16">
      {plans.map((p) => (
        <PlanCard key={p.id} plan={p} />
      ))}
    </div>
  );
}
