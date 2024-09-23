import Home from "@/components/Home/Home";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokelist | Portfolio",
  description: "Tailwind CSS, Next.js, Tanstack Query, Framer Motion",
};

const SolutionPage = () => {
  return (
    <div className="SolutionPage container flex-1 flex">
      <Home />
    </div>
  );
};

export default SolutionPage;
