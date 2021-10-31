import React from 'react';

import {Container, Avatar, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";



const Root = styled('div')(({ theme }) => ({
//Global
//Phones and small tablets
    [theme.breakpoints.down('md')]: {
    },
//Tablets
    [theme.breakpoints.up('md')]: {
    },
//Desktops
    [theme.breakpoints.up('lg')]: {
    },
}));

export default function AboutMe(){
    return(
        <Root>
            <div className={"background"}>
                <Container>
                    <div>About Me</div>
                </Container>
            </div>
        </Root>
    )
}
