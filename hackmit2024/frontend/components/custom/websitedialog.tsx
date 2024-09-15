"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import Image from "next/image";
import { NodeData } from "@/app/_shared/models/Node";
import { Dispatch, SetStateAction } from "react";

interface IWebsiteDialogProps {
  data: NodeData;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function WebsiteDialog(props: IWebsiteDialogProps) {
  let { imageSource, dialogTitle, dialogContents, externalSources } =
    props.data;
  // CONSTANTS WILL CHANGE LATER =================================
  imageSource = "https://nextjs.org/icons/next.svg";
  externalSources = ["Capybara", "capies", "copies"];
  dialogTitle = "Capybaras are the best";

  dialogContents =
    "The capybara[a] or greater capybara (Hydrochoerus hydrochaeris) is a giant cavy rodent native to South America. It is the largest living rodent[2] and a member of the genus Hydrochoerus. The only other extant member is the lesser capybara (Hydrochoerus isthmius). Its close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the nutria. The capybara inhabits savannas and dense forests, and lives near bodies of water. It is a highly social species and can be found in groups as large as 100 individuals, but usually live in groups of 10–20 individuals. The capybara is hunted for its meat and hide and also for grease from its thick fatty skin.[3]";
  // =================================

  // let sourcesText = "";
  // for (let i = 0; i < externalSources.length; i++) {
  //   sourcesText += " / ";
  //   sourcesText += externalSources[i];
  // }

  const sourcesText = externalSources.join(" / ");

  return (
    <Dialog open={props.isOpen} onOpenChange={props.setIsOpen}>
      <DialogContent className="max-w-5xl w-full p-0 overflow-hidden bg-gradient-to-b from-blue-100 to-white border-2 border-blue-300 rounded-full shadow-lg">
        <div className="relative w-full h-48">
          <Image
            src={imageSource}
            alt={dialogTitle}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="px-36 p-6">
          <DialogHeader className="mb-6 mt-2">
            <DialogDescription className="text-base text-gray-600 ">
              {sourcesText}
            </DialogDescription>
            <DialogTitle className="text-3xl font-bold text-gray-900">
              {dialogTitle}
            </DialogTitle>
          </DialogHeader>
          <p className="text-gray-700 mb-6">{dialogContents}</p>
          <div className="text-center">
            <a
              href={externalSources[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-white font-bold rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 hover:transition-all duration-300 ease-in-out delay-150"
              onClick={() => props.setIsOpen(false)}
            >
              Go to Source
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
