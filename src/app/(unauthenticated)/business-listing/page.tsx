"use client"
import { useSearchParams } from 'next/navigation';
import BusinessLising from './_components/BusinessLising'
// import { api } from '@/lib/axiosInstance';

// export const revalidate = 10;
// export async function generateStaticParams() {
//   try {
//     const res = await api.get("/category");
//   // console.log (res.data.categories.map((c:any) => ({ id: String(c.id) })) , "here======>")
//   // console.log(res.data.listings , "here======>")
//     return res.data.categories.map((c:any) => ({ id: String(c.id) }));// eslint-disable-line 
//   } catch (error) {
//     console.error("Error fetching listings for static params:", error);
//     return [];
//   }
// }

export default function Page  ()  {
// console.log(params)
const params = useSearchParams();

  return (
    <div><BusinessLising id={params.get("catId")!}  /></div>
  )
}




