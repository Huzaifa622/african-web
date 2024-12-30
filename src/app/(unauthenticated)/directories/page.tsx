import React, { Suspense } from 'react'
import Directory from './_components/Directory'
import Loader from '@/components/ui/Loader'



const page = () => {
  return (
    <Suspense fallback={<Loader/>}><Directory/></Suspense>
  )
}

export default page