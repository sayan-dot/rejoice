"use client";

import Hero from "@/components/Hero";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";
import { ReactLenis } from "lenis/react";

export default function Home() {

  return (
    <>
      <ReactLenis root>
       <Hero/>
       <SectionTwo/>
       <SectionThree/>
      </ReactLenis>
    </>
  );
}
//