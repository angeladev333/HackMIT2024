import { AccordionNodeProps } from "@/components/custom/accordiannode";
import { Position } from "postcss";
import { Dispatch, SetStateAction } from "react";

export interface AggregateAccordionData {
    AggregateAccordionData: AccordionNodeProps[]
}

export interface AccordionData {
    title: string;
    position: { x: number; y: number };
    setPosition: Dispatch<SetStateAction<Position>>;
}