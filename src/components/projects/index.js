import React from "react";

import Paper from '@mui/material/Paper'
import {Container, Card, CardContent, Typography, CardMedia, CardActionArea} from "@mui/material";
import {createTheme, styled, ThemeProvider} from "@mui/material/styles";

import projects from '../data';

const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    ".card":{
        margin:theme.spacing(2),
        width:"45%",
    },
    ".paper":{
        padding:theme.spacing(1),
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between",
    },
//Phones and small tablets
    [theme.breakpoints.down('md')]: {
        height: 200,
        margin: theme.spacing(1),
        ".cardimg":{
            height:100
        },
        ".card":{
            width:"100%"
        },
        ".cardDesc":{
            display: "none"
        }
    },
//Tablets
    [theme.breakpoints.up('md')]: {
        height: 400,
        margin: theme.spacing(3),
        ".cardimg":{
            height:400
        },
        ".card":{
            width:"100%"
        }
    },
//Desktop
    [theme.breakpoints.up('lg')]: {
        ".cardimg":{
            height:250
        },
        ".card":{
            width:"47%"
        }
    },
}));

export default function Projects(){

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return(
        <Root>
            <Container>
                <Paper
                    elevation={4}
                    sx={{textAlign:"center", marginTop:6}}
                >
                    <h1>Some of the projects I've made</h1>
                    <p style={{paddingBottom:5}}>Most of these are React, but there are also vanilla HTML and CSS projects in here too.</p>
                </Paper>
                <Paper elevation={4} className={"paper"}>
                    {projects.map(item => (
                        <ThemeProvider theme={darkTheme}>
                            <Card className={"card"} elevation={5}>
                                <CardActionArea href={item.url}>
                                    <CardMedia
                                        image={item.img}
                                        className={"cardimg"}
                                        alt={item.name}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant={"h5"} component={"h2"}>
                                            {item.name}
                                        </Typography>
                                        <Typography className={"cardDesc"}>
                                            {item.desc}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </ThemeProvider>
                    ))}
                </Paper>
            </Container>
        </Root>
    )
}
