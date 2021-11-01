import React from 'react';

import {Container, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";


import Paintball from '../media/paintball.JPG';
import Quadline from '../media/quadLine.JPG';
import Ultteam from '../media/ultTeam.JPG';
import Hiking from '../media/hiking.jpg';

import ActivAccord from "../accordians/activities";


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
            display: "flex"
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
                    <Paper className={"header"}>
                        <h1 className={"headerTitle"}>About Me</h1>
                        
                    </Paper>
                        
                    <Paper className={"holder"} elevation={4} id={"activityHolder"}>
                        <h2 style={{width:"100%"}}>Activities</h2>

                        <div className={"sectionHolder"} id={"activityHolder"}>
                        <Paper className={"paperinpaper"} id={"activity"} elevation={6}>
                            <img src={Ultteam} className={"activityImg"} alt={"IUPUI's ultimate frisbee team."}/>
                            <h4 className={"activityHeader"}>Ultimate Frisbee</h4>
                            <p>Club Vice President</p>
                        </Paper>
                        <Paper className={"paperinpaper"} id={"activity"} elevation={6}>
                            <img src={Hiking} className={"activityImg"} alt={"Hiking Devil's tower"}/>
                            <h4 className={"activityHeader"}>Hiking</h4>
                            <p>One of the only things that actually keeps me active</p>
                        </Paper>
                        <Paper className={"paperinpaper"} id={"activity"} elevation={6}>
                            <img src={Quadline} className={"activityImg"} alt={"Me and my senior year quad line."}/>
                            <h4 className={"activityHeader"}>Marching Band</h4>
                            <p>Percussion: Bass Line & Quads</p>
                        </Paper>
                        <Paper className={"paperinpaper"} id={"activity"} elevation={6}>
                            <img src={Paintball} className={"activityImg"} alt={"My friends and I playing paintball."}/>
                            <h4 className={"activityHeader"}>Paintball</h4>
                            <p>Just a fun hobby I enjoy... maybe a little too much</p>
                        </Paper>
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
