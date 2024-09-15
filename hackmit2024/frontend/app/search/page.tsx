"use client";

import { AccordionNode } from "@/components/custom/accordiannode";
import NodeTabs from "@/components/custom/tabs";
import FlowPane from "../_shared/components/FlowPane";
import { MockEdgeStructData } from "../_shared/models/MockEdgeData";
import { MockNodeStructData } from "../_shared/models/MockNodeData";

export default function SearchPage() {
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
          <FlowPane nodes={MockNodeStructData} edges={MockEdgeStructData} />
        </main>
      </div>
    </div>
  );
}
