import { Copyright } from 'lucide-react'
import React from 'react'



const BuySell = () => {
  return (
    <div className="rounded-md font-Nunito">
    <h1 className="text-white p-4 bg-[#082143] rounded-t-md text-xl">Buy/Sell Leads</h1>
    <div className="bg-[#F9F9F9] p-4">
      <div className="bg-white p-2 flex flex-col gap-1 border-b">
        <h1 className="text-xs font-bold ">Synthetic leather (PU/PVC leather) from China</h1>
        <div className="flex items-center gap-1 text-xs font-bold  text-[#FF0000]">
          <Copyright   color="#FF0000" size={15}/>
          Sell Lead
        </div>
      </div>
      <div className="bg-white p-2 flex flex-col gap-1 border-b">
        <h1 className="text-xs font-bold ">Quartz Powder</h1>
        <div className="flex items-center gap-1 text-xs font-bold  text-[#FF0000]">
          <Copyright   color="#FF0000" size={15}/>
          Sell Lead
        </div>
      </div>
      <div className="bg-white p-2 flex flex-col gap-1 border-b">
        <h1 className="text-xs font-bold ">Global Exporter of JCB Spares/Sales Machine Genuine & Multibrands Products</h1>
        <div className="flex items-center gap-1 text-xs font-bold  text-[#FF0000]">
          <Copyright   color="#FF0000" size={15}/>
          Sell Lead
        </div>
      </div>
    </div>
  </div>
  )
}

export default BuySell