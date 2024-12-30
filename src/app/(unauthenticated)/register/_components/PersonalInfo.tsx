"use client";
import { useCallback, useEffect, useState } from "react";
import { Input } from "./Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";
import z from "zod";
import { getCategories, getCities } from "@/lib/actions";
import { countries } from "@/lib/constant";
import { ComboboxDemo } from "../../_components/ui/combo-box";

interface Props {
  setActive: React.Dispatch<React.SetStateAction<number>>;
  setPersonalInfo: React.Dispatch<
    React.SetStateAction<
      | {
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
        }
      | undefined
    >
  >;
}

const infoSchema = z.object({
  role: z.string().nonempty({ message: "Required" }),
  fname: z.string().nonempty({ message: "Required" }),
  bussinessSector: z.string().nonempty({ message: "Required" }),
  phone: z.string().min(10),
  username: z.string().min(5),
  email: z.string().email().nonempty({ message: "Required" }),
  cname: z.string().nonempty({ message: "Required" }),
  country: z.string().nonempty({ message: "Required" }),
  city: z.string().nonempty({ message: "Required" }),
  password: z.string().min(6),
  image: z.any(),
});

export type InfoType = z.infer<typeof infoSchema>;

export default function PersonalInfo({ setActive, setPersonalInfo }: Props) {
  const [categries, setCategories] = useState<{ id: string; name: string }[]>();
  const [info, setInfo] = useState<InfoType>({
    role: "",
    fname: "",
    bussinessSector: "",
    phone: "",
    username: "",
    email: "",
    cname: "",
    country: "",
    city: "",
    password: "",
    image: null,
  });
  const [error, setError] = useState<any>({}); // eslint-disable-line
  const [cities, setCities] = useState<string[]>([]); // eslint-disable-line


  const handleChange = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError({});
    const validation = infoSchema.safeParse(info);
    if (validation.success === false) {
      console.log(info);
      console.log(validation.error?.format());
      console.log("error==?");
      return setError(validation?.error?.format());
    }
    setPersonalInfo({
      role: info.role,
      fname: info.fname,
      bussinessSector: info.bussinessSector,
      phone: info.phone,
      username: info.username,
      email: info.email,
      cname: info.cname,
      country: info.country,
      city: info.city,
      password: info.password,
      image: info.image,
      statusOfCompany: "",
      designation: "",
      web: "",
      add1: "",
      add2: "",
      state: "",
      zip: "",
      sellProd: "",
      buyProd: "",
      from: "",
      bLogo: "",
    });
    setActive(2);
  };

  const fetchAll = useCallback( async () => {
    const response = await getCategories("");
    setCategories(response);
  },[])
  useEffect(() => {
    fetchAll();
  }, [fetchAll]);
  
  useEffect(()=>{
    const getCity = async()=>{
      const res = await getCities(info.country);
setCities(res)
    }
getCity()
  },[info.country])

  return (
    <div className="bg-[#F4F4F4] w-full py-6 border rounded-sm">
      <div className="flex justify-center md:justify-evenly gap-4 md:gap-0 flex-wrap">
        <div className="flex flex-col gap-4 md:w-[47%] w-[90%]">
          <Select
            onValueChange={(val) => setInfo((prev) => ({ ...prev, role: val }))}
          >
            <SelectTrigger className="">
              <SelectValue placeholder="I am a*" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                <SelectItem value="buyer">Buyer</SelectItem>
                <SelectItem value="provider">Supplier</SelectItem>
                <SelectItem value="both">Both</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {error.role && (
            <span className="text-red-500 text-sm">
              {error.role._errors[0]}
            </span>
          )}
          <Input
            placeholder="Full Name*"
            type="text"
            value={info.fname}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, fname: e.target.value }))
            }
          />
          {error.fname && (
            <span className="text-red-500 text-sm">
              {error.fname._errors[0]}
            </span>
          )}
          {/* setInfo((prev)=>({...prev , bussinessSector:String(val)})) */}
          {/* <Select
            onValueChange={(val) =>
              setInfo((prev) => ({ ...prev, bussinessSector: String(val) }))
            }
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Boat Builder*" />
            </SelectTrigger>
            <SelectContent>
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={(e) => {
                    const filter = categries?.filter((c) =>
                      c.name
                        .toLowerCase()
                        .includes(e.target.value.toLowerCase())
                    );
                    setFilterData(filter);
                  }}
                />
              <SelectGroup>
                {filterData && filterData?.length > 0
                  ? filterData?.map((c) => (
                      <SelectItem key={c.id} value={String(c.id)}>
                        {c.name}
                      </SelectItem>
                    ))
                  : categries?.map((c) => (
                      <SelectItem key={c.id} value={String(c.id)}>
                        {c.name}
                      </SelectItem>
                    ))}
                {categries?.map((c) => (
                  <SelectItem key={c.id} value={String(c.id)}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select> */}
          <ComboboxDemo frameworks={categries!}  setInfo={setInfo}/>
          {error.bussinessSector && (
            <span className="text-red-500 text-sm">
              {error.bussinessSector._errors[0]}
            </span>
          )}
          <Input
            placeholder="Contact Number *"
            value={info.phone}
            type="tel"
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, phone: e.target.value }))
            }
          />
          {error.phone && (
            <span className="text-red-500 text-sm">
              {error.phone._errors[0]}
            </span>
          )}
          <Input
            placeholder="Username *"
            value={info.username}
            type="text"
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, username: e.target.value }))
            }
          />
          {error.username && (
            <span className="text-red-500 text-sm">
              {error.username._errors[0]}
            </span>
          )}
          <div className="flex flex-wrap items-center gap-8">
            <label className="text-gray-500"> Profile Image</label>
            <input
              type="file"
              className="bg-white border p-2 text-gray-500 rounded-sm w-full"
              onChange={(e) =>
                setInfo((prev) => ({
                  ...prev,
                  image: e.target.files && e.target.files[0]!,
                }))
              }
            />
          </div>
          {error.image && (
            <span className="text-red-500 text-sm">
              {error.image._errors[0]}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4 md:w-[47%] w-[90%]">
          {" "}
          <Input
            placeholder="Email *"
            type="email"
            value={info.email}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          {error.email && (
            <span className="text-red-500 text-sm">
              {error.email._errors[0]}
            </span>
          )}
          <Input
            placeholder="Company Name (If any)"
            type="text"
            value={info.cname}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, cname: e.target.value }))
            }
          />
          {error.cname && (
            <span className="text-red-500 text-sm">
              {error.cname._errors[0]}
            </span>
          )}
          <Select
            onValueChange={(val) =>
              setInfo((prev) => ({ ...prev, country: val }))
            }
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Select Country *" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                {countries?.map((c, idx) => (
                  <SelectItem key={idx} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {error.country && (
            <span className="text-red-500 text-sm">
              {error.country._errors[0]}
            </span>
          )}
       <Select
            onValueChange={(val) =>
              setInfo((prev) => ({ ...prev, city: val }))
            }
          >
            <SelectTrigger className="">
              <SelectValue placeholder="City *" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                {cities?.map((c, idx) => (
                  <SelectItem key={idx} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {error.city && (
            <span className="text-red-500 text-sm">
              {error.city._errors[0]}
            </span>
          )}
          <Input
            placeholder="Password *"
            type="text"
            value={info.password}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {error.password && (
            <span className="text-red-500 text-sm">
              {error.password._errors[0]}
            </span>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <button
          onClick={handleChange}
          className="bg-[#FF0000] px-4 p-2 rounded-sm text-white"
        >
          Submit & Continue
        </button>
      </div>
    </div>
  );
}
