"use client"
// import { api } from "@/lib/axiosInstance";
import MarketById from "../_components/market-by-id";
import { useSearchParams } from "next/navigation";
// export const dynamic = "force-dynamic";
// export const dynamicParams = true;
// export const revalidate = 0; 
// // // export const fallback = "blocking";
// export async function generateStaticParams() {
//     try {
//       const res = await api.get("/blog?type=Marketing");
//       console.log(res) 
//       return res.data.blogs.map((b:any) => ({ id: String(b.id) })); // eslint-disable-line 
//     } catch (error) {
//       console.error("Error fetching listings for static params:", error);
//       return [];
//     }
//   }
  

export default function Page(){
const params = useSearchParams();
    return(
        <div>
            <MarketById id={params.get("id")!} />
        </div>
    )
}