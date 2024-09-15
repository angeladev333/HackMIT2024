import { CSSProperties } from "react"

export interface EdgeStruct {
    type: string   // will always be consistent eg "straight"
    source: string // id of the starting node (16 digit hex)
    target: string // id of the ending node (16 digit hex)
    id: string     // id of the edge (won't need but good measure)
    animated: true
    style?: CSSProperties
}