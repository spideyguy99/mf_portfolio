import React from "react";

import Paper from '@mui/material/Paper'
import {Container, Card, CardContent, Typography, CardMedia, CardActions, CardActionArea} from "@mui/material";
import {styled} from "@mui/material/styles";

import projects from '../data';

const Root = styled('div')(({ theme }) => ({
    padding: theme.spacing(1),
    tansition: "height 1s",
    ".card":{
        margin:theme.spacing(2),
        width:"45%"
    },
    ".cardimg":{
        overflow:"hidden",
    },
    ".paper":{
        padding:5,
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-between"
    },
    [theme.breakpoints.down('md')]: {
        height: 200,
        margin: theme.spacing(1),
        ".cardimg":{
            height:200
        },
        ".card":{
            width:"100%"
        },
        ".cardDesc":{
            display: "none"
        }
    },
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
    [theme.breakpoints.up('lg')]: {
        ".cardimg":{
            height:500
        },
        ".card":{
            width:"47%"
        }
    },
}));

export default function Projects(){
    return(
        <Root>
            <Container>
                <Paper
                    elevation={4}
                    sx={{textAlign:"center"}}
                >
                    <h1>Some of the projects I've made</h1>
                    <p>Most of these are React, but there are also vanilla HTML and CSS projects in here too.</p>
                </Paper>
                <Paper elevation={4} className={"paper"}>
                    {projects.map(item => (
                        <Card className={"card"} elevation={2}>
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

                    ))}
                </Paper>
            </Container>
        </Root>
    )
}
