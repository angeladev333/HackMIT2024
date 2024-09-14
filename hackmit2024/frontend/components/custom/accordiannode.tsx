import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface AccordionNodeProps {
  title: string;
  position: { x: number; y: number };
  setStackAction: any;
  children?: React.ReactNode;
}

export function AccordionNode(props: AccordionNodeProps) {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-2">
        <AccordionTrigger>{props.title}</AccordionTrigger>
        <AccordionContent> Yes.</AccordionContent>
        <AccordionContent className="ml-2">{props.children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
