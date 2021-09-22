import React from "react";
import Paper from '@mui/material/Paper'
import {Container} from "@mui/material";

export default function Projects(){
    return(
        <Container>
            <Paper
                elevation={4}
                sx={{textAlign:"center"}}
            >
                <h1>Some of the projects I've made</h1>
                <p>Most of these are React, but there are also vanilla HTML and CSS projects in here too.</p>
            </Paper>
            <Paper>
                {/*Links to socials and Github */}
            </Paper>
        </Container>
    )
}
