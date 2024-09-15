"use client";

import BigAccordion from "@/components/custom/BigAccordion";
import NodeTabs from "@/components/custom/tabs";
import { AggregateAccordionData } from "../models/bigAccordion";
import { Position } from "../models/position";
import { useEffect, useState } from "react";
import FlowPane from "../_shared/components/FlowPane";
import { MockEdgeStructData } from "../_shared/models/MockEdgeData";
import { MockNodeStructData } from "../_shared/models/MockNodeData";
import { getGenerateURL } from "../_api/endpoints";

// You can import a spinner from Material UI or any other library or use a custom CSS spinner
import CircularProgress from '@mui/material/CircularProgress'; 

export default function SearchPage() {
  const [rawData, setRawData] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state
  const searchTerm = "teach me about computer science";
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const fetchData = async () => {
      console.log("fetching")
      setLoading(true); // Set loading to true when fetching starts
      try {
        const generateUrl = new URL(getGenerateURL(searchTerm));
        const response = await fetch(generateUrl);
        const result = await response.json();
        console.log("Result: ", result)
        setRawData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false); // Set loading to false when fetching ends
        console.log("Done fetching")
      }
    };

    fetchData();
  }, [searchTerm]);

  console.log(rawData)
  
  // Dummy accordion data
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
      <div className="grid grid-cols-4 overflow-hidden max-h-full h-full">
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

          {loading ? (
            // Show a spinner while data is loading
            <div className="flex justify-center items-center h-full">
              <CircularProgress />
            </div>
          ) : (
            // Show the content once the data is fetched
            <FlowPane nodes={MockNodeStructData} edges={MockEdgeStructData} />
          )}
        </main>
      </div>
    </div>
  );
}
