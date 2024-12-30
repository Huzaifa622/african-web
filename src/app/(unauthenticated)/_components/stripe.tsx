"use client"
import { saveSubs } from '@/lib/actions'
import getUser from '@/lib/auth'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'
import toast from 'react-hot-toast'



const   Stripe = () => {
    const param = useSearchParams()
    // const router = useRouter();
    console.log(param.get("session_id"))
    useEffect(()=>{
        const fetchSub = async () =>{
          const res =  await saveSubs(param.get("session_id")!)
          toast.success(res)
          await getUser()
            // router.push("/")
            window.location.href = "/"
        }
        fetchSub()
    },[])
  return (
    <div></div>
  )
}

export default Stripe;