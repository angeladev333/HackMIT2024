"use client"

import Grid from "@mui/material/Grid";
import FlowPane from "../_shared/components/FlowPane";
import { MockEdgeStructData } from "../_shared/models/MockEdgeData";
import { MockNodeStructData } from "../_shared/models/MockNodeData";

export default function Page() {
    return (
        <Grid container>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={9}>
                <FlowPane nodes={MockNodeStructData} edges={MockEdgeStructData} />
            </Grid>
        </Grid>
    )
}