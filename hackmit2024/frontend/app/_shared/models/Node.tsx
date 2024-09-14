export interface NodeStruct {
    id: string // 16 digit generated hex
    type: string // represents the component that we are using to render the nodes
    position: {
        x: number
        y: number
    };
    data: NodeData
}

export interface NodeData {
    imageSource: string
    nodeLabel: string
    dialogTitle: string
    dialogContents: string
    externalSources: string[]
}