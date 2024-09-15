import { Box, Typography } from "@mui/material";
import { NodeData } from "../models/Node";
import Image from "next/image";
import { borderColour, textBlack } from "../../_shared/styles/colors";
import { Handle, Position } from "reactflow";
import WebsiteDialog from "@/components/custom/websitedialog";
import { useState } from "react";

export interface ICategoryNodeProps {
  data: NodeData;
}

export default function CategoryNode(props: ICategoryNodeProps) {
  const { imageSource, dialogTitle } = props.data;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={nodeContainerStyle}
      onClick={() => {
        setIsOpen(true && !isOpen);
        console.log("clicked, isOpen:", isOpen);
      }}
    >
      <Image
        src={getImageSrc(imageSource)}
        alt="Node containing information"
        height="64"
        width="64"
      />
      <Typography sx={textStyle}>{dialogTitle}</Typography>
      <WebsiteDialog data={props.data} isOpen={isOpen} setIsOpen={setIsOpen} />
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </Box>
  );
}

function getImageSrc(name: string) {
  return `/shared/temp-images/${name}`;
}

const nodeContainerStyle = {
  padding: "8px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  border: `1px solid ${borderColour}`,
};

const textStyle = {
  color: textBlack,
};
