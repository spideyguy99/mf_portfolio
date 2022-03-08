import React from 'react';
import {Paper} from "@mui/material";

export default function Skills(){
    return(
        <div>
            <div className={"sectionHolder"} id={"skillholder"}>{/*ONLY DISPLAYS ON DESKTOP*/}
                <Paper className={"paperinpaper"} id={"skill"} elevation={6}>
                    <h4 className={"skillheader"}>Programming Languages</h4>
                    <ul>
                        <li>JavaScript</li>
                        <ul>
                            <li>Vue</li>
                            <li>JQuery</li>
                        </ul>
                        <li>React JS</li>
                        <ul>
                            <li>Material UI</li>
                            <li>Bootstrap</li>
                            <li>Redux</li>
                            <li>Firebase</li>
                        </ul>
                        <li>React Native</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <ul>
                            <li>SASS</li>
                            <li>Less</li>
                        </ul>
                        <li>Java</li>
                        <li>C++</li>
                        <li>Visual Basic</li>
                    </ul>
                </Paper>
                <Paper className={"paperinpaper"} id={"skill"} elevation={6}>
                    <h4>Software</h4>
                    <ul>
                        <li>Microsoft Office Suite</li>
                        <ul>
                            <li>Word</li>
                            <li>Powerpoint</li>
                            <li>Excel</li>
                        </ul>
                        <li>Adobe Suite</li>
                        <ul>
                            <li>Illustrator</li>
                            <li>Photoshop</li>
                            <li>Premiere</li>
                        </ul>
                        <li>GitHub</li>
                        <li>Git</li>
                        <li>Google Cloud Platform</li>
                        <li>Google Firebase</li>
                        <li>Netlify</li>
                        <li>Node</li>
                    </ul>
                </Paper>
                <Paper className={"paperinpaper"} id={"skill"} elevation={6}>
                    <h4>Operating Systems</h4>
                    <ul>
                        <li>Microsoft Windows</li>
                        <li>Apple MacOS and iOS</li>
                        <li>Linux</li>
                        <ul>
                            <li>Ubuntu</li>
                            <li>Kali</li>
                        </ul>
                    </ul>
                </Paper>
                <Paper className={"paperinpaper"} id={"skill"} elevation={6}>
                    <h4>IDE's</h4>
                    <ul>
                        <li>WebStorm</li>
                        <li>Codepen</li>
                        <li>Brackets</li>
                        <li>Visual Studio Code</li>
                    </ul>
                </Paper>
            </div>
        </div>
    )
};