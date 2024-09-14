"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
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
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-slate-800 text-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">Your App</h1>
          <div className="flex space-x-4">
            {["Home", "About", "Contact", "Help"].map((item) => (
              <a key={item} href="#" className="hover:text-slate-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden p-4 gap-4 max-w-7xl ">
        {/* Left sidebar */}
        <aside className="w-80 bg-slate-100 rounded-lg shadow-lg overflow-y-auto">
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
        <main className="flex-1 p-4 overflow-y-auto max-h-full h-full">
          <h2 className="text-2xl font-bold mb-4">Welcome to Your App</h2>
          <p>
            Start exploring or use the search bar to find what you're looking
            for.
          </p>
          <div className="h-96 w-30 bg-grey-500 text-center">
            Flow chart here
          </div>

          {/* Search bar */}
          <div className="bg-white p-4 sticky bottom-0 w-full">
            <div className="flex items-center max-w-md mx-auto">
              <Input
                type="text"
                placeholder="What's on your mind?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow"
              />
              <Button className="ml-2">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
