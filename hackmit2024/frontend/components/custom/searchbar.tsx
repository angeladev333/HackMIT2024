"use client";

import * as React from "react";
import { Search } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandInput,
  CommandEmpty,
} from "@/components/ui/command";

export function SimpleSearchBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const suggestions = [
    "Tell me about the origin of cryptography",
    "Is a capybara a fish?",
    "I want to learn math",
  ];

  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div>
      <div>
        <Command
          className="rounded-lg border-grey shadow-sm md:min-w-[450px]"
          style={{ backgroundColor: "#FAFAFA" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#F3F3F3";
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
                setIsOpen(false);
                handleSearch(query);
              }
            }}
            onFocus={() => setIsOpen(true)}
            className="text-md max-h-24 h-full"
          />

          <CommandList>
            {isOpen && (
              <CommandGroup heading="Suggestions">
                {suggestions.map((suggestion) => (
                  <CommandItem
                    onSelect={(value) => {
                      setQuery(value);
                      setIsOpen(false);
                    }}
                  >
                    <span> {suggestion}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </div>
    </div>
  );
}
