"use client";
import { cn } from "@/lib/utils";
import {
  AlignRight,
  Filter,
  Gift,
  House,
  Info,
  Plus,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Login from "./Login";
import { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

const routes = [
  {
    path: "/",
    label: "Home",
    icon: <House size={16} />,
  },
  {
    path: "/agents",
    label: "Agents Wanted",
    icon: <UsersRound size={16} />,
  },
  {
    path: "/market",
    label: "Market Reports",
    icon: <Filter size={16} />,
  },
  {
    path: "/industry",
    label: "Industry Reports",
    icon: <Info size={16} />,
  },
  // {
  //   path: "/directories",
  //   label: "Download directories",
  //   icon: <BookText size={16} />,
  // },
  // {
  //   path: "/business",
  //   label: "Business Offers",
  //   icon: <Star size={16} />,
  // },
  {
    path: "/business-listing?catId=",
    label: "Product Finder",
    icon: <Gift size={16} />,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [user, setUser] = useState<{ role: string }>();
  const [subs, setSubs] = useState(null);
  const [token, setToken] = useState("");

  useEffect(() => {
    const userData = localStorage.getItem("user");
    const accessToken = localStorage.getItem("access_token");
    const subscription = localStorage.getItem("subscription");
    if (userData) setUser(JSON.parse(userData));
    if (subscription) setSubs(JSON.parse(subscription));
    if (accessToken) setToken(accessToken);
  }, []);
  // console.log(subs)
  return (
    <div className="font-Nunito text-white z-50">
      <div className="w-[80%] max-w-screen-2xl py-2 mx-auto flex justify-between">
        <Image
          src={"/images/aww.png"}
          alt="logo"
          width={1000}
          height={102}
          className="w-[28%]"
        />
        {/* <Image
          src={"/images/gif.jpg"}
          alt="logo"
          width={500}
          height={102}
          className="w-[60%]"
        /> */}
      </div>
      <div
        className={cn(
          "bg-[#051d3e] flex justify-end p-5 md:p-0 md:justify-center text-xs"
        )}
      >
        <div className="hidden md:block">
          <div className="flex gap-6 py-2">
            {routes.map((r, idx) => (
              <Link href={r.path} key={idx} className="hidden md:block">
                <div
                  className={cn(
                    "flex w-auto py-2 text-white text-xs relative z-50 items-center tracking-tighter justify-center",
                    pathname === r.path ? " text-[#FF0000]" : ""
                  )}
                >
                  <div className="flex items-center justify-center lg:justify-start w-full py-2 font-semibold gap-1">
                    <div>{r.icon}</div>
                    <div className="hidden lg:block">{r.label}</div>
                  </div>
                </div>
              </Link>
            ))}
            {user && token && user.role == "provider" && subs !== null && (
              <Link
                href={`https://aww-provider.dev-um.xyz/?token=${token}`}
                className={cn(
                  "bg-black relative z-50 flex items-center gap-2 p-2 ml-12",
                  pathname === "/pricing" ? "bg-[#FF0000]" : "bg-black"
                )}
              >
                <Plus size={15} /> List your business
              </Link>
            )}
               {user && token && user.role == "provider" && subs == null && (
              <Link
                href={`/plans`}
                className={cn(
                  "bg-black relative z-50 flex items-center rounded-lg gap-2 p-2 ml-12",
                  pathname === "/pricing" ? "bg-[#FF0000]" : "bg-black"
                )}
              >
                 Buy Plan
              </Link>
            )}
            {!token && (
              <div className="relative z-50">
                <Login />
              </div>
            )}
            {token && (
              <button
                onClick={() => {
                  window.localStorage.removeItem("access_token");
                  window.location.reload();
                }}
                className="relative z-50 cursor-pointer text-center bg-[#FF0000] flex items-center p-3 rounded-sm gap-1 font-bold"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
        <div className="md:hidden relative z-50">
          <Sheet>
            <SheetTrigger asChild>
              <AlignRight />
            </SheetTrigger>
            <SheetContent className="text-white bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  border-l border-gray-100">
              <SheetHeader>
                <SheetTitle className="text-4xl font-saira">AAW</SheetTitle>
                <div className="flex flex-col justify-evenly mt-14 items-center py-4 text-lg h-[50vh]">
                  <SheetDescription className="flex flex-col items-center gap-4">
                    {routes.map((r, idx) => (
                      <Link href={r.path} key={idx} className="block">
                        <SheetClose
                          className={cn(
                            "flex w-auto py-2 text-white text-xs relative z-50 items-center tracking-tighter justify-center",
                            pathname === r.path ? " text-[#FF0000]" : ""
                          )}
                        >
                          <div className="flex items-center justify-center lg:justify-start w-full py-2 font-semibold gap-1">
                            <div>{r.icon}</div>
                            <div className="">{r.label}</div>
                          </div>
                        </SheetClose>
                      </Link>
                    ))}
                  </SheetDescription>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
