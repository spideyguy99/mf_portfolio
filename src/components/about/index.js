import React from 'react';

import {Container, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";

import ActivAccord from "./accordians/activities";
import ActivitySection from "./sections/activities";
import UnderConstruction from '../media/underconstuction.gif';


const Root = styled('div')(({ theme }) => ({
//Global
".background":{backgroundColor:'#90caf9', width:"100%", paddingTop:theme.spacing(10), paddingBottom:theme.spacing(5)},
    ".paper":{
        display:"flex",
        flexWrap:"wrap",
        justifyContent: "space-around",
        padding: theme.spacing(2),
    },
    ".header": {
        display: "flex",
        justifyContent: "center",
        marginBottom:theme.spacing(3),
        alignItems:"center"
    },
    "#activityHolder":{
        marginBottom:theme.spacing(5)
    },
    ".activityImg":{
        borderRadius:4 ,
        width:"100%",
    },
    ".headerTitle":{
        width:"100%",
        textAlign:"center"
    },
//Phones and small tablets
    [theme.breakpoints.down('md')]: {
        ".activityImg":{
            width:"100%"
        },
        "#activity":{
           display:"block"
        },
        ".sectionHolder":{
            display:"none"
        },
        ".accordion":{
            display:"inline"
        },
        ".paperinpaper":{
            padding:theme.spacing(1),
            marginBottom:theme.spacing(1),
            display: "flex"
        },
        ".holder":{
            padding: theme.spacing(2),
            marginTop:25,
        },
    },
//Tablets
    [theme.breakpoints.up('md')]: {
        "#activity":{
            display:"flex",
            flexWrap:"wrap",
            width:"40%"
        },
        ".activityHeader":{
            width:"100%"
        },
        "#activityHolder":{
            display:"flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        },
        ".sectionHolder":{
            display:"none"
        },
        ".accordion":{
            display:"inline"
        },
        ".paperinpaper":{
            padding:theme.spacing(1),
            margin:theme.spacing(2),
            display: "flex",
        },
        ".holder":{
            padding: theme.spacing(2),
            marginTop:25
        },
    },
//Desktops
    [theme.breakpoints.up('lg')]: {
        ".accordion":{
            display:"none"
        },
        ".sectionHolder":{
            display:"inline"
        },
        "#activityHolder":{
            display:"flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        },
        "#activity":{
            display:"block",
            textAlign:"center",
            width:"45%"
        },
        ".paperinpaper":{
            padding:theme.spacing(1),
            margin:theme.spacing(2),
            display: "flex"
        },
        ".holder":{
            padding: theme.spacing(2),
            marginTop:25
        },
    },
}));

export default function AboutMe(){

    return(
        <Root>
            <div className={"background"}>
                <Container>
                    <Paper className={"header"} style={{display:"flex"}}>
                        <h1 className={"headerTitle"}>About Me </h1>
                        <br/>
                        <img src={UnderConstruction}/>
                    </Paper>
                        
                    <Paper className={"holder"} elevation={4} id={"activityHolder"}>
                        <h2 style={{width:"100%"}}>Activities</h2>

                        <div className={"sectionHolder"}>
                            <ActivitySection/>
                        </div>

                        <div className={"accordion"}>
                            <ActivAccord/>
                        </div>
                    </Paper>
                </Container>
            </div>
        </Root>
    )
}
