import React, { Suspense } from 'react'
import Stripe from '../_components/stripe'
import Loader from '@/components/ui/Loader'

const page = () => {
  return (
    <Suspense fallback={<Loader/>}><Stripe/></Suspense>
  )
}

export default page