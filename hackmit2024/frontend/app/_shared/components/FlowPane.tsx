import ReactFlow, { Background } from "reactflow";
import CategoryNode from "./CategoryNode";
import "reactflow/dist/style.css";
import { Box } from "@mui/material";
import { NodeStruct } from "../models/Node";
import { EdgeStruct } from "../models/Edge";

interface IFlowPaneProps {
  nodes: NodeStruct[];
  edges: EdgeStruct[];
}

export default function FlowPane(props: IFlowPaneProps) {
  const nodeTypes = {
    categoryNode: CategoryNode,
  };
  const connectionLineStyle = { stroke: "#8c8888" };

  return (
    <Box sx={flowContainerStyle} id="flow-pane" className="max-h-full h-full">
      <ReactFlow
        nodes={props.nodes}
        edges={props.edges}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        proOptions={{ hideAttribution: true }}
        defaultViewport={{x:0, y:0, zoom:0.5}}
      >
        <Background gap={16} size={1} color="#ddd" />
      </ReactFlow>
    </Box>
  );
}

const flowContainerStyle = {
    height: "100%",
    background: "white"
}