export interface ResponseNode {
    uniqueID: string
    Header: string
    Content: string
    Image: string
    Children: string[]
}

export interface GenerateResponse {
    responses: ResponseNode[]
}