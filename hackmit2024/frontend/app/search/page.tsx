"use client";

import BigAccordion from "@/components/custom/BigAccordion";
import NodeTabs from "@/components/custom/tabs";
import { AggregateAccordionData } from "../models/bigAccordion";
import { Position } from "../models/position";
import { SetStateAction, useEffect, useState } from "react";
import FlowPane from "../_shared/components/FlowPane";
import { MockEdgeStructData } from "../_shared/models/MockEdgeData";
import { MockNodeStructData } from "../_shared/models/MockNodeData";
import { getGenerateURL } from "../_api/endpoints";

// You can import a spinner from Material UI or any other library or use a custom CSS spinner
import CircularProgress from '@mui/material/CircularProgress'; 
import { biologyAccordionData } from "../_shared/models/MockBiologyData";
import { computerAccordionData } from "../_shared/models/MockComputerData";
import { calcAccordionData } from "../_shared/models/MockCalcData";
import { BioNodes } from "../_shared/models/MockBiologyNodes";
import { ComputerNodes } from "../_shared/models/MockComputerNodes";
import { CalcNodes } from "../_shared/models/MockCalcNodes";

export default function SearchPage() {
  const [rawData, setRawData] = useState(null);
  const searchTerm = "teach me about computer science";
  const [activeTab, setActiveTab] = useState(0);
  const accordionData = [biologyAccordionData, computerAccordionData, calcAccordionData]
  const nodeData = [BioNodes, ComputerNodes, CalcNodes]

  useEffect(() => {
    if (false) {
      const fetchData = async () => {
        console.log("fetching")
        try {
          const generateUrl = new URL(getGenerateURL(searchTerm));
          const response = await fetch(generateUrl);
          const result = await response.json();
          console.log("Result: ", result)
          setRawData(result);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          console.log("Done fetching")
        }
      };
  
      fetchData();
    }
  }, [searchTerm]);
  
  return (
    <div className="h-screen flex flex-col">
      {/* Main content */}
      <div className="grid grid-cols-4 overflow-hidden max-h-full h-full">
        {/* Left sidebar */}
        <aside className="col-span-1 bg-slate-100 overflow-y-auto">
          <h2 className="text-lg border-t-2 font-semibold p-6 bg-white text-black mb-4">
            Your explorations
          </h2>
          <div className="p-4">
            <BigAccordion data={accordionData[activeTab]} />
          </div>
        </aside>

        {/* Main content area */}
        <main className="col-span-3 overflow-y-auto max-w-full w-full max-h-full h-full">
          <NodeTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <FlowPane nodes={nodeData[activeTab]} edges={MockEdgeStructData} />
        </main>
      </div>
    </div>
  );
}
