import React from 'react'
import {  Download,  Monitor, Plus,  Volume1 } from "lucide-react";
import Image from "next/image";


const Magazine = () => {
  return (
    <div>
    <Image src={"/images/cv.png"} alt="cv" width={500} height={100} />
    <div className="bg-gray-200 border flex flex-col gap-5 px-4 py-4 text-xs uppercase font-semibold">
      <div className="flex items-center gap-1 border">
        <Volume1 color="#FF0000" size={15} /> Advertise in Magazine
      </div>
      <div className="flex items-center gap-1">
      <Monitor color="#FF0000" size={15}/> Online Magazine
      </div>
      <div className="flex items-center gap-1">
      <Download color="#FF0000" size={15}/> Download African Directories
      </div>
      <div className="flex items-center gap-1">
      <Plus color="#FF0000" size={15} />  Add Your Company Profile
      </div>
    </div>
  </div>
  )
}

export default Magazine