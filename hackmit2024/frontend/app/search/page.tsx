"use client";

import { useState } from "react";
import {
  AccordionNode,
  AccordionNodeProps,
} from "@/components/custom/accordiannode";

export default function SearchPage() {
  // CONSTANTS ==============================================
  const explorations: AccordionNodeProps[] = [
    {
      title: "Exploration 1",
      children: {
        title: "Exploration 1",
        children: <p>Content for exploration 1</p>,
      },
    },
    { title: "Exploration 2", children: <p>Content for exploration 2</p> },
    { title: "Exploration 3", children: <p>Content for exploration 3</p> },
  ];

  // ==================================================

  return (
    <div className="h-screen flex flex-col">
      {/* Main content */}
      <div className="grid grid-cols-4 overflow-hidden px-12 p-12 gap-4 max-w-7xl ">
        {/* Left sidebar */}
        <aside className="col-span-1 bg-slate-100 rounded-lg shadow-lg overflow-y-auto">
          <h2 className="text-lg font-semibold p-6 bg-cyan-500 text-white mb-4">
            Your explorations
          </h2>
          <div className="p-4">
            <AccordionNode title={"Capy"}>
              <AccordionNode title={"Capy2"}>
                <AccordionNode title={"capy3"} />
              </AccordionNode>
            </AccordionNode>
            <AccordionNode title="Capy4" />
          </div>
        </aside>

        {/* Main content area */}
        <main className="col-span-3 flex-1 px-24 p-4 overflow-y-auto max-h-full h-full">
          <h2 className="text-2xl font-bold mb-4">Welcome to Your App</h2>
          <p>
            Start exploring or use the search bar to find what you're looking
            for.
          </p>
          <div className="h-96 w-30 bg-grey-500 text-center">
            Flow chart here
          </div>
        </main>
      </div>
    </div>
  );
}
