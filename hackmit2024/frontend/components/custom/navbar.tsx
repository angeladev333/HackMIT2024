"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";
import { SimpleSearchBar } from "./searchbar";

export default function INavbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="w-full pl-12 pt-12 grid grid-cols-4 gap-4 bg-slate-800 text-white p-4">
        <div className="w-24 flex items-center">
          <h1 className="text-xl font-bold">Your App</h1>
        </div>

        {/* Search bar */}
        <div className="col-span-3 pr-max p-4">
          <SimpleSearchBar />
        </div>
      </div>
    </>
  );
}
