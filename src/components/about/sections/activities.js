import React from 'react';
import {Paper} from "@mui/material";
import Ultteam from "../../media/ultTeam.JPG";
import Hiking from "../../media/hiking.jpg";
import Quadline from "../../media/quadLine.JPG";
import Paintball from "../../media/paintball.JPG";

export default function ActivitySection(){
    return(
        <div id={"activityHolder"}>
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
    )
}