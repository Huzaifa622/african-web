import { getPlans } from "@/lib/actions";
import Plans from "./_components/Plans";

export default async function page(){
    const plans = await getPlans();
    return(
        <div>
            <Plans plans={plans} />
        </div>
    )
}