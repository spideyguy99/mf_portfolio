import React from "react";

import Paper from '@mui/material/Paper'
import {Container, Card, CardContent, Typography, CardMedia, CardActionArea} from "@mui/material";
import {createTheme, styled, ThemeProvider} from "@mui/material/styles";

import projects from '../data';

const Root = styled('div')(({ theme }) => ({
//Global
    ".background":{backgroundColor:'#90caf9', width:"100%", paddingTop:theme.spacing(10), paddingBottom:theme.spacing(5)},
    ".card":{
        margin:theme.spacing(2),
        width:"40%",
        padding:3
    },
    ".paper":{
        display:"flex",
        flexWrap:"wrap",
        justifyContent: "space-around",
        padding: theme.spacing(2),
    },
    "#header": {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding:theme.spacing(1),
        marginBottom:theme.spacing(3)
    },
    ".headerTitle":{
        width:"100%",
        textAlign:"center"
    },
//Phones and small tablets
    [theme.breakpoints.down('md')]: {
        ".cardimg":{
            height:100
        },
        ".card":{
            width:"100%",
            padding:theme.spacing(1)
        },
        ".cardDesc":{
            display: "none"
        },
        ".paper":{
            padding:0
        }
    },
//Tablets
    [theme.breakpoints.up('md')]: {
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
            width:"45%"
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
            <div className={"background"}>
                <Container>
                <Paper elevation={4} className={"paper"} id={"header"}>
                    <h1 className={"headerTitle"}>Some of the projects I've made</h1>
                    <p style={{paddingBottom:5}}>Most of these are React, but there are also vanilla HTML and CSS projects in here too.</p>
                    <p>IMPORTANT NOTE: These projects are not accessibility focused, and may not function properly on smaller devices.</p>
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
            </div>
        </Root>
    )
}
