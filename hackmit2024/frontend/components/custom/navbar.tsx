"use client";

import { SimpleSearchBar } from "./searchbar";
import Link from "next/link";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface INavbarProps {
  displayTab: number
  setDisplayTab: Dispatch<SetStateAction<number>>
}

export default function INavbar(props: INavbarProps) {
  return (
    <>
      <div className="h-20 w-full grid grid-cols-4 pl-0 bg-white text-black">
        <Link href="/" className="w-48 pl-4  h-full">
          <Image className="w-48 pl-4 scale-150 h-full pt-4"
            src="/logo.png"
            alt="logo"
            width={150}
            height={100}
            layout="intrinsic"
          />
        </Link>

        <div className="col-span-3 pr-max pt-4 pb-4 pr-4">
          <SimpleSearchBar displayTab={props.displayTab} setDisplayTab={props.setDisplayTab}/>
        </div>
      </div>
    </>
  );
}
