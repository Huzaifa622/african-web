import { Suspense } from "react";
import Herobanner from "./_components/Herbanner";

import Section1 from "./_components/Section1";
import Section2 from "./_components/Section2";
import Section3 from "./_components/Section3";
import Section4 from "./_components/Section4";
import Section5 from "./_components/Section5";
import Section6 from "./_components/Section6";
import Section7 from "./_components/Section7";
import Section8 from "./_components/Section8";
import Loader from "@/components/ui/Loader";

export default function page() {
  return (
    <>
      <Herobanner />
      <Section1 />
      <Suspense fallback={<Loader />}>
        <Section2 />
      </Suspense>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </>
  );
}
