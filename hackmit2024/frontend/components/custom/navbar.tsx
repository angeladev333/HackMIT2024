"use client";

import { useState } from "react";
import { SimpleSearchBar } from "./searchbar";
import Link from "next/link";
import Image from "next/image";

export default function INavbar() {

  return (
    <>
      <div className="h-20 w-full grid grid-cols-4 pl-0 bg-white text-black">
        <Link href="/" className="w-48 pl-4 flex items-center h-full">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={100}
            layout="intrinsic"
          />
        </Link>

        <div className="col-span-3 pr-max pt-4 pb-4 pr-4">
          <SimpleSearchBar />
        </div>
      </div>
    </>
  );
}
