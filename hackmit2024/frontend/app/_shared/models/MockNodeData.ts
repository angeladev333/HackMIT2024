import { NodeStruct } from "./Node";

export const MockNodeStructData: NodeStruct[] = [
    {
        id: "1",
        type: "categoryNode",
        position: {
            x: 100,
            y: 100
        },
        data: {
            imageSource: "",
            nodeLabel: "Node 1",
            dialogTitle: "",
            dialogContents: "",
            externalSources: []
        }
    },
    {
        id: "2",
        type: "categoryNode",
        position: {
            x: 600,
            y: 100
        },
        data: {
            imageSource: "",
            nodeLabel: "Node 2",
            dialogTitle: "",
            dialogContents: "",
            externalSources: []
        }
    },
    {
        id: "3",
        type: "categoryNode",
        position: {
            x: 1100,
            y: 100
        },
        data: {
            imageSource: "",
            nodeLabel: "Node 3",
            dialogTitle: "",
            dialogContents: "",
            externalSources: []
        }
    }
]