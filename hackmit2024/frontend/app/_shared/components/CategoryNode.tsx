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
  const { imageSource, dialogContents, dialogTitle } = props.data;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      sx={nodeContainerStyle}
      onClick={() => {
        setIsOpen(true && !isOpen);
        console.log("clicked, isOpen:", isOpen);
      }}
      className="grid grid-cols-3 gap-2 bg-white rounded-lg h-full border-2"
    >
      <div className="col-span-1 h-44 w-full relative">
        <Image
          src={getImageSrc(imageSource)}
          alt="Node containing information"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="col-span-2 ml-4">
        <Typography sx={{ ...textStyle, fontSize:"24px", fontWeight: 700 }} className="top-0">
          {dialogTitle}
        </Typography>
        <Typography
          sx={{
            ...textStyle,
            fontSize: "16px", 
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 3,
            textOverflow: "ellipsis",
            lineHeight: "1.2em",
            maxHeight: "4.5em",
            maxWidth: "300px",
          }}
        >
          {dialogContents}
        </Typography>

        <WebsiteDialog
          data={props.data}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    </Box>
  );
}

function getImageSrc(name: string) {
  return `/shared/${name}`;
}

const nodeContainerStyle = {
  height: "80px",  
  padding: "24px",
  display: "flex",
  alignItems: "flex-start",  
  flexDirection: "column",
  border: `1px solid ${borderColour}`,
};

const textStyle = {
  color: textBlack,
};
