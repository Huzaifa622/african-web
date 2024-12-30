"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import BusinessInfo from "./BusinessInfo";
import Subscription from "./Subscription";

interface Props {
  plans: {
    features: string[];
    id: string;
    is_active: string;
    is_recommended: string;
    name: string;
    period: string;
    period_type: string;
    price: string;
  }[];
}

export default function Register({plans}:Props) {
  const [active, setActive] = useState<number>(1);
  const [personalInfo, setPersonalInfo] = useState<{
    role: string;
    fname: string;
    bussinessSector: string;
    phone: string;
    username: string;
    email: string;
    cname: string;
    country: string;
    city: string;
    password: string;
    image: any; // eslint-disable-line
    statusOfCompany: string;
    designation: string;
    web: string;
    add1: string;
    add2: string;
    state: string;
    zip: string;
    sellProd: string;
    buyProd: string;
    from: string;
    bLogo: any; // eslint-disable-line
  }>();
  
  return (
    <div className="py-12 font-Nunito">
      <div className="flex flex-col gap-12 ">
        <h1 className="text-4xl text-left">Registration</h1>
        <div className="w-full bg-[#F4F4F4] capitalize gap-3 flex flex-wrap justify-center md:justify-evenly rounded-sm py-4">
          <h1
            className={cn(
              "bg-black text-white text-lg p-2 w-[90%] md:w-[30%] rounded-sm text-center",
              active == 1 ? "bg-[#FF0000]" : ""
            )}
          >
            1.personal info
          </h1>
          <h1
            className={cn(
              "bg-black text-white p-2 text-lg  w-[90%] md:w-[30%] rounded-sm text-center",
              active == 2 ? "bg-[#FF0000]" : ""
            )}
          >
            2.business info
          </h1>
          <h1
            className={cn(
              "bg-black text-white text-lg p-2 w-[90%] md:w-[30%] rounded-sm text-center",
              active == 3 ? "bg-[#FF0000]" : ""
            )}
          >
            3.Complete
          </h1>
        </div>
        <div>
          {active == 1 && (
            <PersonalInfo
              setActive={setActive}
              setPersonalInfo={setPersonalInfo}
            />
          )}
          {active == 2 && (
            <BusinessInfo
              setActive={setActive}
              setPersonalInfo={setPersonalInfo}
              personalInfo={personalInfo!}
            />
          )}
          {active == 3 && <Subscription  plans={plans} />}
        </div>
      </div>
    </div>
  );
}
