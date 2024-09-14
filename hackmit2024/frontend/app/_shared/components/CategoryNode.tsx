import { Box, Typography } from "@mui/material";
import { NodeData } from "../models/Node";
import Image from "next/image";
import { textBlack } from "../../_shared/styles/colors";

interface ICategoryNodeProps {
    data: NodeData
}

export default function CategoryNode(props: ICategoryNodeProps) {
    const { imageSource, nodeLabel, dialogTitle, dialogContents, externalSources} = props.data

    return (
        <Box sx={nodeContainerStyle}>
            <Image src={getImageSrc(imageSource)} alt={nodeLabel} height="64" width="64" />
            <Typography sx={textStyle}>
                {dialogTitle}
            </Typography>
            { /* Future dialog goes here */ }
        </Box>
    )
}

function getImageSrc(name: string) {
    return `/shared/temp-images`
}

const nodeContainerStyle = {
    padding: "8px",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
}

const textStyle = {
    color: textBlack
}