"use client";

import { useState } from "react";
import { SimpleSearchBar } from "./searchbar";
import Link from "next/link";

export default function INavbar() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <div className="w-full pl-12 pt-12 grid grid-cols-4 gap-4 bg-slate-800 text-white p-4">
        <Link href="/" className="w-24 flex items-center">
          <h1 className="text-xl font-bold">Your App</h1>
        </Link>

        {/* Search bar */}
        <div className="col-span-3 pr-max p-4">
          <SimpleSearchBar />
        </div>
      </div>
    </>
  );
}
