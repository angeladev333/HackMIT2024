"use client";

import * as React from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
} from "@/components/ui/command";
import { Dispatch } from "react";

interface ISimpleSearchBarProps {
  displayTab: number
  setDisplayTab: Dispatch<React.SetStateAction<number>>
}

export function SimpleSearchBar(props: ISimpleSearchBarProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const suggestions = [
  ];

  function handleSearch(term: string) {
    console.log(term);
    
  }

  return (
    <div>
      <div className="relative">
        <Command
          className="rounded-lg border-indigo-300 border-2 shadow-sm md:min-w-[450px]"
          style={{ backgroundColor: "#FAFAFA" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#F5F5F5";
            setIsOpen(true);
          }} // Darker color on hover
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#FAFAFA";
            setIsOpen(false);
          }} // Reset color
          onClick={(e) => {
            e.currentTarget.style.backgroundColor = "#FAFAFA";
            setIsOpen(true);
          }} // Reset color
        >
          <CommandInput
            placeholder="What do you want to explore today?"
            value={query}
            onValueChange={(value) => {
              setQuery(value);
              setIsOpen(true);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                await delay(20000);
                setIsOpen(false);
                handleSearch(query);
                props.setDisplayTab(props.displayTab + 1)
              }
            }}
            onFocus={() => setIsOpen(true)}
            className="text-md max-h-24 h-full"
          />

          {isOpen && (
            <CommandList>
            </CommandList>
          )}
        </Command>
      </div>
    </div>
  );
}
