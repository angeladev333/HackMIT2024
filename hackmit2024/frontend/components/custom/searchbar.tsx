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

  return (
    <div>
      <Command className="rounded-lg border shadow-md md:min-w-[450px]">
        <CommandInput
          placeholder="What do you want to explore today?"
          value={query}
          onValueChange={(value) => {
            setQuery(value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
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
  );
}
