import { getPlans } from "@/lib/actions";
import Register from "./_components/Register";

export default async function page(){
    const plans = await getPlans()
    return(
        <div className="w-[80%] max-w-screen-2xl mx-auto">
            <Register plans={plans}/>
        </div>
    )
}