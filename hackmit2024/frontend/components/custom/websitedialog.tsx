"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WebsiteDialog(props: {
  title: string;
  sourceURL: string;
  contents: string;
  sources: string[];
}) {
  let { title, sourceURL, contents, sources } = props;
  const [isOpen, setIsOpen] = useState(false);

  // CONSTANTS WILL CHANGE LATER
  sourceURL = "https://nextjs.org/icons/next.svg";
  sources = ["Capybara", "capies", "copies"];
  title = "Capybaras are the best";
  let sourcesText = "";
  for (let i = 0; i < sources.length; i++) {
    sourcesText += " / ";
    sourcesText += sources[i];
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Classic Dialog</Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-gradient-to-b from-blue-100 to-white border-2 border-blue-300 rounded-full shadow-lg">
        <div className="relative w-full h-36">
          <Image src={sourceURL} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="px-36 p-6">
          <DialogHeader>
            <DialogDescription className="text-base text-gray-700 ">
              {sourcesText}
            </DialogDescription>
            <DialogTitle className="text-2xl font-bold text-gray-900 mb-4 ">
              {title}
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-700 mb-6">{contents}</p>
          <div className="text-center">
            <a
              href={sources}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              Learn More
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
