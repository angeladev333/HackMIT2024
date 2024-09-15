import { textBlack } from "@/app/_shared/styles/colors";
import { Position } from "@/app/models/position";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Box, Typography } from "@mui/material";
import React, { Dispatch, ReactNode, SetStateAction } from "react";

export interface AccordionNodeProps {
  title: string;
  position: { x: number; y: number };
  setPosition: Dispatch<SetStateAction<Position>>;
  children?: ReactNode;
}

export function AccordionNode(props: AccordionNodeProps) {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <Typography sx={accordionTextStyle}>
            {props.title}
          </Typography>
        </AccordionTrigger>
        <Box sx={accordionChildStyle}>
          <AccordionContent className="ml-2">{props.children}</AccordionContent>
        </Box>
      </AccordionItem>
    </Accordion>
  );
}

const accordionChildStyle = {
  marginLeft: "8px"
}

const accordionTextStyle = {
  color: textBlack,
  fontSize: "14px"
}