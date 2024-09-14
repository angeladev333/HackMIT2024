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

  // CONSTANTS WILL CHANGE LATER =================================
  sourceURL = "https://nextjs.org/icons/next.svg";
  sources = ["Capybara", "capies", "copies"];
  title = "Capybaras are the best";

  contents =
    "The capybara[a] or greater capybara (Hydrochoerus hydrochaeris) is a giant cavy rodent native to South America. It is the largest living rodent[2] and a member of the genus Hydrochoerus. The only other extant member is the lesser capybara (Hydrochoerus isthmius). Its close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the nutria. The capybara inhabits savannas and dense forests, and lives near bodies of water. It is a highly social species and can be found in groups as large as 100 individuals, but usually live in groups of 10–20 individuals. The capybara is hunted for its meat and hide and also for grease from its thick fatty skin.[3]";
  // =================================

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
        <div className="relative w-full h-48">
          <Image src={sourceURL} alt={title} layout="fill" objectFit="cover" />
        </div>
        <div className="px-36 p-6">
          <DialogHeader className="mb-6 mt-2">
            <DialogDescription className="text-base text-gray-600 ">
              {sourcesText}
            </DialogDescription>
            <DialogTitle className="text-3xl font-bold text-gray-900">
              {title}
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-700 mb-6">{contents}</p>
          <div className="text-center">
            <a
              href={sourceURL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-white font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 hover:transition-all duration-300 ease-in-out delay-150"
              onClick={() => setIsOpen(false)}
            >
              Go to Source
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
