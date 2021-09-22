import React from "react";
import Paper from '@mui/material/Paper';
import {Container} from "@mui/material";

export default function Home(){
    return(
        <Container>
            <Paper
                elevation={4}
                sx={{textAlign:"center"}}
            >
                <h1>Hey, I'm Noah :)</h1>
                <p>I make fun websites and work on computers!</p>
            </Paper>
            <Paper>
                {/*Links to socials and Github */}
            </Paper>
        </Container>
    )
}
