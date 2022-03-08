import React from 'react';
import {Paper} from "@mui/material";

export default function WorkExp(){
    return(
        <div>
            <Paper className={"paperinpaper"} elevation={6}>
                <div className={"divinpaper"}>
                    <h4 className={"headername"}>IUPUI: School of Engineering and Technology</h4>
                    <h4 style={{fontStyle:"italic"}}>Assistant to the Webmaster</h4>
                    <p>January 2020 - December 2020</p>
                </div>
                <div className={"divinpaper"} id={"divdesc"}>
                    <ul>
                        <li>Developed Engineering and Technology Website using Trello (Kanban) </li>
                        <li>Built website using Cascade CMS</li>
                    </ul>
                </div>
            </Paper>
            <Paper className={"paperinpaper"} elevation={6}>
                <div className={"divinpaper"}>
                    <h4 className={"headername"}>IUPUI: Multidisciplinary Undergraduate Research Institute</h4>
                    <h4 style={{fontStyle:"italic"}}>Researcher / Developer</h4>
                    <p>May 2019 - August 2019</p>
                </div>
                <div className={"divinpaper"} id={"divdesc"}>
                    <ul>
                        <li>Researched and Developed a mobile application with React Native</li>
                        <li>Present total research findings at CRL Summer Symposium at IUPUI</li>
                        <li>Developed application using a broken version of Agile in a small group setting</li>
                    </ul>
                </div>
            </Paper>
            <Paper className={"paperinpaper"} elevation={6}>
                <div className={"divinpaper"}>
                    <h4 className={"headername"}>Best Buy - Geek Squad</h4>
                    <h4 style={{fontStyle:"italic"}}>Advanced Repair Agent</h4>
                    <p>October 2020 - Present</p>
                </div>
                <div className={"divinpaper"} id={"divdesc"}>
                    <ul>
                        <li>Consult clients on various computer, phone, and miscellaneous technology issues. Then troubleshoot multiple solutions for the given technical issue.</li>
                        <li>Perform repairs on Apple products and complete tickets using GSX/AST.</li>
                        <li>Repair clients devices. This could range anywhere from installing updates, to correcting firmware issues.</li>
                    </ul>
                </div>
            </Paper>
            <Paper className={"paperinpaper"} elevation={6}>
                <div className={"divinpaper"}>
                    <h4 className={"headername"}>IUPUI: University Information Technology Services</h4>
                    <h4 style={{fontStyle:"italic"}}>Consultant Supervisor</h4>
                    <p>August 2018 - October 2020</p>
                </div>
                <div className={"divinpaper"} id={"divdesc"}>
                    <ul>
                        <li>Trained and oversaw constultants</li>
                        <li>Assisted with both First and Second Tier IT Support for IUPUI Students</li>
                    </ul>
                </div>
            </Paper>
        </div>
    )
}