"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { InfoType } from "../../register/_components/PersonalInfo";

// const frameworks = [
//   {
//     value: "next.js",
//     label: "Next.js",
//   },
//   {
//     value: "sveltekit",
//     label: "SvelteKit",
//   },
//   {
//     value: "nuxt.js",
//     label: "Nuxt.js",
//   },
//   {
//     value: "remix",
//     label: "Remix",
//   },
//   {
//     value: "astro",
//     label: "Astro",
//   },
// ]

export function ComboboxDemo({
  frameworks,
  setInfo,
}: {
  frameworks: { id: string; name: string }[];
  setInfo: React.Dispatch<React.SetStateAction<InfoType>>
}) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className=" justify-between bg-white"
        >
          {value
            ? frameworks.find((framework) => framework.name === value)?.name
            : "Boat Builder"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className=" p-0 bg-white">
        <Command>
          <CommandInput className="text-gray-200" placeholder="Boat Builder" />
          <CommandList>
            <CommandEmpty>Loading..</CommandEmpty>
            <CommandGroup>
              {frameworks?.map((framework) => (
                <CommandItem
                  key={framework.id}
                  value={framework.id}
                  className="hover:bg-gray-300 cursor-pointer"
                
                  onSelect={(currentValue: any) => {  // eslint-disable-line
                  
                    setInfo((prev) => ({
                      ...prev,
                      bussinessSector: String(framework.id)
                    }));
                    console.log(framework.id)
                    setValue(currentValue === name ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.name}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
