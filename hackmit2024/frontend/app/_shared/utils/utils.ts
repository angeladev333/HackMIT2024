import { Position } from "@/app/models/position";
import { GenerateResponse } from "../models/GenerateResponse";
import { NodeStruct } from "../models/Node";
import { EdgeStruct } from "../models/Edge";

const locationsArray: Position[] = [
    {
        x: 100,
        y: 800,
    },
    {
        x: 1000,
        y: 380,
    },
    {
        x: 2000,
        y: 300,
    },
    {
        x: 2000,
        y: 100,
    },
    {
        x: 2000,
        y: 500,
    },
    {
        x: 2000,
        y: 700,
    },
    {
        x: 1000,
        y: 1300,
    },
    {
        x: 2000,
        y: 1000,
    },
    {
        x: 2000,
        y: 1200,
    },
    {
        x: 2000,
        y: 1400,
    },
    {
        x: 2000,
        y: 1600,
    },
    {
        x: 1000,
        y: 2220,
    },
    {
        x: 1000,
        y: 3140,
    },
    {
        x: 2000,
        y: 1900,
    },
    {
        x: 2000,
        y: 2100,
    },
    {
        x: 2000,
        y: 2300,
    },
    {
        x: 2000,
        y: 2500,
    },
    {
        x: 2000,
        y: 2800,
    },
    {
        x: 2000,
        y: 3000,
    },
    {
        x: 2000,
        y: 3200,
    },
]

export function GenerateNodes(data: GenerateResponse): NodeStruct[] {
    return data.responses.map((item, index) => ({
      id: item.uniqueID, // Generate an incremental id starting from 1
      type: "categoryNode", // Static type
      position: locationsArray[index],
      data: {
        imageSource: item.Image || "", // Use provided image or empty if not available
        dialogTitle: item.Header || "", // Use provided header
        dialogContents: item.Content || "", // Use provided content
        externalSources: [], // Empty for now, can be populated if needed
      },
    }));
}
  
export function GenerateEdges(nodes: { uniqueID: string; Children: string[] }[]): EdgeStruct[] {
    const edges: EdgeStruct[] = [];
  
    const strokeWidth = 2;
  
    nodes.forEach(node => {
      if (node.Children && node.Children.length > 0) {
        node.Children.forEach((childID, index) => {
          edges.push({
            type: "bezier",
            source: node.uniqueID,
            target: childID,
            id: `edge-${node.uniqueID}-${childID}`,
            animated: true,
            style: { strokeWidth: strokeWidth },
          });
        });
      }
    });
  
    return edges;
  }
  