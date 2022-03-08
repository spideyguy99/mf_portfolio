import React from 'react';
import {Paper} from "@mui/material";

export default function Edu(){
    return(
        <div>
            <Paper className={"paperinpaper"} id={"edu"} elevation={6}>
                <div style={{width: "100%"}}>
                    <h3 className={"headername"}>Indiana University Purdue University Indianapolis - IUPUI</h3>
                    <h4>Purdue School of Engineering and Technology </h4>
                    <p>Bachelor of Science Computer and Information Technology</p>
                    <p>Concentration: Web/Application Development</p>
                    <p>Attended: August 2018 - present</p>
                </div>
            </Paper>
            <Paper className={"paperinpaper"} id={"edu"} elevation={6}>
                <div style={{width: "100%"}}>
                    <h3 className={"headername"}>Indiana University Kokomo</h3>
                    <h4>Indiana University School of Sciences</h4>
                    <p>School of Science New Media</p>
                    <p>Attended: August 2017 - May 2018</p>
                </div>
            </Paper>
            <Paper className={"paperinpaper"} id={"edu"} elevation={6}>
                <div style={{width: "100%"}}>
                    <h3 className={"headername"}>Fishers High School</h3>
                    <p>Core 40</p>
                    <p>Attended: August 2013 - May 2017</p>
                </div>
            </Paper>
        </div>
    )
}