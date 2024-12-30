import React, { Suspense } from 'react'
import Business from './_components/Business'
import Loader from '@/components/ui/Loader'



const page = () => {
  return (
    <Suspense fallback={<Loader/>}><Business/></Suspense>
  )
}

export default page