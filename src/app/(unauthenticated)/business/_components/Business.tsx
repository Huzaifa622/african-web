import BusinessCard from '@/components/BusinessCard'
import React from 'react'



const Business = () => {
  return (
    <div className='w-[80%] mx-auto max-w-screen-2xl flex gap-8 flex-col items-center py-12 '>
        <BusinessCard/>
        <BusinessCard/>
        <BusinessCard/>
    </div>
  )
}

export default Business