"use client";

import { useState } from "react";
import {
  AccordionNode,
  AccordionNodeProps,
} from "@/components/custom/accordiannode";
import NodeTabs from "@/components/custom/tabs";
import WebsiteDialog from "@/components/custom/websitedialog";

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
      <div className="grid grid-cols-4 overflow-hidden max-h-full h-full ">
        {/* Left sidebar */}
        <aside className="col-span-1 bg-slate-100 overflow-y-auto">
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
        <main className="col-span-3 overflow-y-auto max-w-full w-full max-h-full h-full">
          <NodeTabs />
        </main>
      </div>
    </div>
  );
}
