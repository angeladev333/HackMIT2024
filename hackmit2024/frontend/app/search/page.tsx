"use client";

import BigAccordion from "@/components/custom/BigAccordion";
import NodeTabs from "@/components/custom/tabs";
import { AggregateAccordionData } from "../models/bigAccordion";
import { Position } from "../models/position";
import { useState } from "react";

export default function SearchPage() {
  const [position, setPosition] = useState<Position>({x: 0, y: 0})
  // ==================================================

  let bigAccordionDummyData: AggregateAccordionData = {
    AggregateAccordionData: 
      [
        {
          title: "Biggggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Biggggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Biggggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Biggggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Biggggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Biggggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Biggggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Biggggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigggggggggg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        },
        {
          title: "Bigg",
          position: { x: 0, y: 0 },
          setPosition: setPosition,
        }
      ]
  }
  
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
            <BigAccordion data={bigAccordionDummyData} />
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
