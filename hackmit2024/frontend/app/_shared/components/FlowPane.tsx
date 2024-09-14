import ReactFlow from "reactflow"
import { MockNodeStructData } from "../models/MockNodeData"
import { MockEdgeStructData } from "../models/MockEdgeData"
import CategoryNode from "./CategoryNode"
import "reactflow/dist/style.css";
import { Box } from "@mui/material";

export default function FlowPane() {
    const nodeTypes = {
        categoryNode: CategoryNode
    }
    const connectionLineStyle = { stroke: "#8c8888" }

    return (
        <Box sx={flowContainerStyle} id="flow-pane">
            <ReactFlow
                nodes={MockNodeStructData}
                edges={MockEdgeStructData}
                nodeTypes={nodeTypes}
                connectionLineStyle={connectionLineStyle}
                proOptions={{  hideAttribution: true }}
                style={flowStyle}
            />
        </Box>
    )
}

const flowContainerStyle = {
    height: "600px"
}

const flowStyle = {
    background: "white"
}