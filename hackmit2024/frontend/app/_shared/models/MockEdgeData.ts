import { EdgeStruct } from "./Edge";

const strokeWidth = 2

export const MockEdgeStructData: EdgeStruct[] = [
    {
        type: "bezier",
        source: "1",
        target: "2",
        id: "edge 1",
        animated: true,
        style: { strokeWidth: strokeWidth }
    },
    {
        type: "bezier",
        source: "2",
        target: "3",
        id: "edge 2",
        animated: true,
        style: { strokeWidth: strokeWidth }
    },
    {
        type: "bezier",
        source: "2",
        target: "4",
        id: "edge 3",
        animated: true,
        style: { strokeWidth: strokeWidth }
    }
]