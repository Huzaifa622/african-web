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
import {
  getCategories,
  getCities,
  getCompanyStatus,
  // getProviderType,
} from "@/lib/actions";
import { countries } from "@/lib/constant";
import { api } from "@/lib/axiosInstance";
import toast from "react-hot-toast";
import { X } from "lucide-react";

interface Props {
  setActive: React.Dispatch<React.SetStateAction<number>>;
  personalInfo: {
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
  };
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
  cname: z.string().nonempty({ message: "Required" }),
  bussinessSector: z.string().nonempty({ message: "Required" }),
  phone: z.string().min(10),
  country: z.string().nonempty({ message: "Required" }),
  city: z.string().nonempty({ message: "Required" }),
  statusOfCompany: z.string().nonempty({ message: "Required" }).min(1),
  designation: z.string().nonempty({ message: "Required" }),
  web: z.string().nonempty({ message: "Required" }),
  add1: z.string().nonempty({ message: "Required" }),
  add2: z.string().nonempty({ message: "Required" }),
  state: z.string().nonempty({ message: "Required" }),
  zip: z.string().nonempty({ message: "Required" }),
  sellProd: z.string(),
  buyProd: z.string(),
  from: z.string().nonempty({ message: "Required" }).min(1),
  bLogo: z.any(),
});

type InfoType = z.infer<typeof infoSchema>;

export default function BusinessInfo({
  setActive,
  setPersonalInfo,
  personalInfo,
}: Props) {
  const [categries, setCategories] = useState<[{ id: string; name: string }]>();
  const [company, setCompany] = useState<[{ id: string; name: string }]>();
  // const [provider, setProvider] = useState<[{ id: string; name: string }]>();
  const [info, setInfo] = useState<InfoType>({
    cname: personalInfo.cname,
    bussinessSector: personalInfo.bussinessSector,
    country: personalInfo.country,
    phone: personalInfo.phone,
    city: personalInfo.city,
    statusOfCompany: "",
    designation: "",
    web: "",
    add1: "",
    add2: "",
    state: "",
    zip: "",
    sellProd: "",
    buyProd: "",
    from: "1",
    bLogo: null,
  });
  const [error, setError] = useState<any>({});// eslint-disable-line
  const [sellProductList, setSellProductList] = useState<string[]>([]); // eslint-disable-line
  const [buyProductList, setBuyProductList] = useState<string[]>([]); // eslint-disable-line
  const [cities, setCities] = useState<string[]>([]); // eslint-disable-line

  const handleChange = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setError({});

    const validation = infoSchema.safeParse(info);
    if (!validation.success) {
      console.log(info);
      console.log(validation.error?.format());
      console.log("error==?");
      return setError(validation?.error?.format());
    }

    // Update personalInfo directly with values from `info`
    const updatedPersonalInfo = {
      ...personalInfo,
      bussinessSector: info.bussinessSector,
      phone: info.phone,
      cname: info.cname,
      country: info.country,
      city: info.city,
      statusOfCompany: info.statusOfCompany,
      designation: info.designation,
      web: info.web,
      add1: info.add1,
      add2: info.add2,
      state: info.state,
      zip: info.zip,
      sellProd: info.sellProd,
      buyProd: info.buyProd,
      from: info.from,
      bLogo: info.bLogo,
    };

    setPersonalInfo(updatedPersonalInfo);

    const formData = new FormData();
    formData.append("full_name", updatedPersonalInfo.fname);
    formData.append("username", updatedPersonalInfo.username);
    formData.append("email", updatedPersonalInfo.email);
    formData.append("password", updatedPersonalInfo.password);
    formData.append("company_name", updatedPersonalInfo.cname);
    formData.append("address", updatedPersonalInfo.add1);
    formData.append("street", updatedPersonalInfo.add2);
    formData.append("city", updatedPersonalInfo.city);
    formData.append("state", updatedPersonalInfo.state);
    formData.append("country", updatedPersonalInfo.country);
    formData.append("phone", updatedPersonalInfo.phone);
    formData.append("category_id", updatedPersonalInfo.bussinessSector);
    formData.append("provider_type_id", updatedPersonalInfo.from);
    formData.append("company_status_id", updatedPersonalInfo.statusOfCompany);
    formData.append("role", updatedPersonalInfo.role);

    if (updatedPersonalInfo.image) {
      formData.append("profile_pic", updatedPersonalInfo.image);
    }
    if (updatedPersonalInfo.bLogo) {
      formData.append("bussiness_logo", updatedPersonalInfo.bLogo);
    }
    formData.append("designation", updatedPersonalInfo.designation);
    formData.append("website", updatedPersonalInfo.web);
    formData.append("zipcode", updatedPersonalInfo.zip);
    formData.append("products_want_to_sell", sellProductList.join(","));
    formData.append("products_want_to_buy", buyProductList.join(","));
 
  // console.log(formData.values)
    await api
      .post("/provider/register", formData)
      .then((res) => {
        toast.success(res.data.message);
        window.localStorage.setItem("access_token", res.data.access_token);
        window.localStorage.setItem("user", JSON.stringify(res.data.user));
        setPersonalInfo({
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
          bLogo: null,
        });
        setActive(3);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  const handleSellKeyDown = (e: any) => {// eslint-disable-line
    if (e.key === "Enter" && info.sellProd.trim() !== "") {
      // Prevent the default enter key behavior (i.e., moving to a new line)
      e.preventDefault();

      // Add the product to the array
      setSellProductList((prev) => [
        ...prev,
        ...info.sellProd
          .trim()
          .split(/\n|,/)
          .map((item) => item.trim())
          .filter(Boolean),
      ]);
      console.log(sellProductList);
      // Clear the textarea
      setInfo((prev) => ({ ...prev, sellProd: "" }));
    }
  };
  const handleBuyKeyDown = (e: any) => {// eslint-disable-line
    if (e.key === "Enter" && info.buyProd.trim() !== "") {
      // Prevent the default enter key behavior (i.e., moving to a new line)
      e.preventDefault();

      // Add the product to the array
      setBuyProductList((prev) => [
        ...prev,
        ...info.buyProd
          .trim()
          .split(/\n|,/)
          .map((item) => item.trim())
          .filter(Boolean),
      ]);
      console.log(sellProductList);
      // Clear the textarea
      setInfo((prev) => ({ ...prev, buyProd: "" }));
    }
  };

  const fetchAll = useCallback(async () => {
    const catRes = await getCategories("");
    const companyRes = await getCompanyStatus();
    // const pRes = await getProviderType();

    setCategories(catRes);
    setCompany(companyRes);
    // setProvider(pRes);
  }, []);
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
      <div className="flex justify-evenly">
        <div className="flex flex-col gap-4 md:w-[47%]">
          <Input
            value={info.cname}
            placeholder="Company Name*"
            type="text"
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
              setInfo((prev) => ({ ...prev, statusOfCompany: String(val) }))
            }
          >
            <SelectTrigger className="">
              <SelectValue placeholder="Status of Company*" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                {company?.map((c) => (
                  <SelectItem key={c.id} value={String(c.id)}>
                    {c.name}
                  </SelectItem>
                ))}
                {/* <SelectItem value="service_provider">Service Provider</SelectItem>
                <SelectItem value="exporter">Exporter</SelectItem>
                <SelectItem value="traders">Traders</SelectItem>
                <SelectItem value="other">Other</SelectItem> */}
              </SelectGroup>
            </SelectContent>
          </Select>
          {error.statusOfCompany && (
            <span className="text-red-500 text-sm">
              {error.statusOfCompany._errors[0]}
            </span>
          )}
          {/* setInfo((prev)=>({...prev , bussinessSector:String(val)})) */}

          <Input
            placeholder="Contact Number *"
            type="tel"
            value={info.phone}
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
            placeholder="Adress Line1"
            type="text"
            value={info.add1}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, add1: e.target.value }))
            }
          />
          {error.add1 && (
            <span className="text-red-500 text-sm">
              {error.add1._errors[0]}
            </span>
          )}
             <Select
             defaultValue={info.city}
            onValueChange={(val) =>
              setInfo((prev) => ({ ...prev, statusOfCompany: String(val) }))
            }
          >
            <SelectTrigger className="">
              <SelectValue placeholder="City*" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {/* <SelectLabel>Fruits</SelectLabel> */}
                {cities?.map((c) => (
                  <SelectItem key={c} value={String(c)}>
                    {c}
                  </SelectItem>
                ))}
                {/* <SelectItem value="service_provider">Service Provider</SelectItem>
                <SelectItem value="exporter">Exporter</SelectItem>
                <SelectItem value="traders">Traders</SelectItem>
                <SelectItem value="other">Other</SelectItem> */}
              </SelectGroup>
            </SelectContent>
          </Select>
          {error.city && (
            <span className="text-red-500 text-sm">
              {error.city._errors[0]}
            </span>
          )}
          <Input
            placeholder="Zip code*"
            type="text"
            value={info.zip}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, zip: e.target.value }))
            }
          />
          {error.zip && (
            <span className="text-red-500 text-sm">{error.zip._errors[0]}</span>
          )}
          <div className="relative">
            <textarea
              placeholder="Please list the products which you sell to attract business partners"
              className="p-4 border rounded-sm outline-none text-gray-500 w-full"
              value={info.sellProd}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, sellProd: e.target.value }))
              }
              onKeyDown={handleSellKeyDown}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {/* Render the list of products */}
              {sellProductList.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-700"
                >
                  <span className="mr-2">{product}</span>
                  <X
                    className="cursor-pointer text-red-500"
                    size={16}
                    onClick={() => {
                      const filter = sellProductList.filter(
                        (_, idx) => idx !== index
                      );
                      console.log(filter);
                      setSellProductList(filter);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          {error.sellProd && (
            <span className="text-red-500 text-sm">
              {error.sellProd._errors[0]}
            </span>
          )}

          {/* <div className="flex items-center gap-8">
            <label className="text-gray-500"> Profile Image</label>
            <input
              type="file"
              className="bg-white border p-2 text-gray-500 rounded-sm"
            />
          </div>*/}
          {error.from && (
            <span className="text-red-500 text-sm">
              {error.from._errors[0]}
            </span>
          )}
        </div>
        <div className="flex flex-col gap-4 md:w-[47%]">
          {" "}
          <Select
            defaultValue={info.bussinessSector}
            onValueChange={(val) =>
              setInfo((prev) => ({ ...prev, bussinessSector: String(val) }))
            }
          >
            <SelectTrigger className="">
              <SelectValue
                placeholder="Business Sector*"
                defaultValue={info.bussinessSector}
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {categries?.map((c) => (
                  <SelectItem key={c.id} value={String(c.id)}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {error.bussinessSector && (
            <span className="text-red-500 text-sm">
              {error.bussinessSector._errors[0]}
            </span>
          )}
          <Input
            placeholder="Your Designation (If any)"
            type="text"
            value={info.designation}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, designation: e.target.value }))
            }
          />
          {error.designation && (
            <span className="text-red-500 text-sm">
              {error.designation._errors[0]}
            </span>
          )}
          {/* <Input
            placeholder="Company Name (If any)"
            type="text"
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, cname: e.target.value }))
            }
          />
          {error.cname && (
            <span className="text-red-500 text-sm">
              {error.cname._errors[0]}
            </span>
          )} */}
          <Input
            placeholder="Website (eg: www.domain.com)"
            type="url"
            value={info.web}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, web: e.target.value }))
            }
          />
          {error.web && (
            <span className="text-red-500 text-sm">{error.web._errors[0]}</span>
          )}
          <Input
            placeholder="Address Line2"
            type="text"
            value={info.add2}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, add2: e.target.value }))
            }
          />
          {error.add2 && (
            <span className="text-red-500 text-sm">
              {error.add2._errors[0]}
            </span>
          )}
          <Input
            placeholder="State"
            type="text"
            value={info.state}
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, state: e.target.value }))
            }
          />
          {error.state && (
            <span className="text-red-500 text-sm">
              {error.state._errors[0]}
            </span>
          )}
          <Select
            defaultValue={info.country}
            onValueChange={(val) =>
              setInfo((prev) => ({ ...prev, country: val }))
            }
          >
            <SelectTrigger className="">
              <SelectValue
                placeholder="Select Country *"
                defaultValue={info.country}
              />
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
       <div className="relative">
            <textarea
              placeholder="Please list the products which you buy to attract business partners..."
              className="p-4 border rounded-sm outline-none text-gray-500 w-full"
              value={info.buyProd}
              onChange={(e) =>
                setInfo((prev) => ({ ...prev, buyProd: e.target.value }))
              }
              onKeyDown={handleBuyKeyDown}
            />
            <div className="mt-4 flex flex-wrap gap-2">
              {/* Render the list of products */}
              {buyProductList.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-1 text-sm text-gray-700"
                >
                  <span className="mr-2">{product}</span>
                  <X
                    className="cursor-pointer text-red-500"
                    size={16}
                    onClick={() => {
                      const filter = buyProductList.filter(
                        (_, idx) => idx !== index
                      );
                      console.log(filter);
                      setBuyProductList(filter);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
          {error.buyProd && (
            <span className="text-red-500 text-sm">
              {error.buyProd._errors[0]}
            </span>
          )}
          <div className="flex items-center gap-8">
            <label className="text-gray-500"> Business Logo</label>
            <input
              type="file"
              onChange={(e) =>
                setInfo((prev) => ({
                  ...prev,
                  bLogo: e.target.files && e.target.files[0]!,
                }))
              }
              className="bg-white border p-2 text-gray-500 rounded-sm"
            />
          </div>
          {error.bLogo && (
            <span className="text-red-500 text-sm">
              {error.bLogo._errors[0]}
            </span>
          )}
          {/* <Input
            placeholder="Password *"
            type="text"
            onChange={(e) =>
              setInfo((prev) => ({ ...prev, password: e.target.value }))
            }
          />
          {error.password && (
            <span className="text-red-500 text-sm">
              {error.password._errors[0]}
            </span>
          )} */}
        </div>
      </div>
      <div className="flex justify-center items-center py-8">
        <button
          onClick={handleChange}
          className="bg-[#FF0000] px-4 p-2 rounded-sm text-white"
        >
          Save & Continue
        </button>
      </div>
    </div>
  );
}
