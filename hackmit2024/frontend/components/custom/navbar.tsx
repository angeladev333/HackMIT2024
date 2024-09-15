"use client";

import { useState } from "react";
import { SimpleSearchBar } from "./searchbar";
import Link from "next/link";

export default function INavbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
    
      <div className="h-20 w-full grid grid-cols-4 pl-0 bg-white text-black">
        <Link href="/" className="w-48 flex items-top">
          <h1 className="pl-4 text-xl font-bold pt-6">Your App</h1>
        </Link>

        {/* Search bar */}
        <div className="col-span-3 pr-max pt-4 pb-4 pr-4">
          <SimpleSearchBar />
        </div>
      </div>
    </>
  );
}
