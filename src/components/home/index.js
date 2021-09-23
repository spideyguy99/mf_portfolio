import React from "react";

import Paper from '@mui/material/Paper';
import {Container} from "@mui/material";
import {Avatar} from "@mui/material";
import {styled} from "@mui/material/styles";

import Profile from '../media/profile.jpeg';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Root = styled('div')(({ theme }) => ({
    ".paper":{
        display:"flex",
        flexWrap:"wrap",
        justifyContent: "space-around",
        padding: theme.spacing(2)
    },
    ".headername":{
        lineHeight:0
    },
    "#edu":{
      textAlign:"center"
    },
    [theme.breakpoints.down('md')]: {
    ".icons":{
        height: 50,
        width:50
    },
    "#divdesc":{
        display:"none"
    },
    ".holder":{
        padding: theme.spacing(2),
        marginTop:25
    },
        ".paperinpaper":{
            padding:theme.spacing(1),
            marginBottom:theme.spacing(1),
            display: "flex"
        },
        ".headername":{
            lineHeight: 1
        }
    },
    [theme.breakpoints.up('md')]: {
        ".icons":{
            height:100,
            width:100
        },
        ".paperinpaper":{
            padding:theme.spacing(1),
            margin:theme.spacing(2),
            display: "flex"
        },
        ".divinpaper":{
            width:"50%"
        },
        ".holder":{
            padding: theme.spacing(2),
            marginTop:25
        }
    },
    [theme.breakpoints.up('lg')]: {
        ".icons":{
            height:150,
            width:150
        },
        ".holder":{
            padding: theme.spacing(2),
            marginTop:25
        },
        ".paperinpaper":{
            padding:theme.spacing(1),
            margin:theme.spacing(2),
            display: "flex"
        },
        ".divinpaper":{
            width:"50%"
        }
    },
}));

export default function Home(){
    return(
        <Container>
            <Paper
                elevation={4}
                sx={{textAlign:"center"}}
            >
                <h1>Hey, I'm Noah :)</h1>
                <p>I make fun websites and work on computers!</p>
            </Paper>
            <Root>
                <Paper elevation={4} className={"paper"}>
                    <Avatar alt={"Noah Furniss"} src={Profile} className={"icons"}/>
                    <GitHubIcon className={"icons"}/>
                    <LinkedInIcon className={"icons"}/>
                    <FacebookIcon className={"icons"}/>
                    <InstagramIcon className={"icons"}/>
                    {/*Links to socials and Github */}
                </Paper>
                <Paper className={"holder"} elevation={4}>
                    <h2>Education</h2>
                    <Paper className={"paperinpaper"} id={"edu"} elevation={6}>
                        <div style={{width: "100%"}}>
                            <h3 className={"headername"}>Indiana University Purdue University Indianapolis - IUPUI</h3>
                            <h4>Purdue School of Engineering and Technology </h4>
                            <p>Bachelor of Science Computer and Information Technology</p>
                            <p>Concentration: Web/Application Development</p>
                        </div>
                    </Paper>
                    <Paper className={"paperinpaper"} id={"edu"} elevation={6}>
                        <div style={{width: "100%"}}>
                            <h3 className={"headername"}>Indiana University Kokomo</h3>
                            <h4>Indiana University School of Sciences</h4>
                            <p>Bachelor of Science New Media</p>
                        </div>
                    </Paper>
                    <Paper className={"paperinpaper"} id={"edu"} elevation={6}>
                        <div style={{width: "100%"}}>
                            <h3 className={"headername"}>Fishers High School</h3>
                            <p>Core 40</p>
                        </div>
                    </Paper>
                </Paper>
                <Paper className={"holder"} elevation={4}>
                    <h2>Work Experience</h2>

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
                            <li>Consult clients on various computer, phone, and miscellaneous technology issuesThen troubleshoot multiple solutions for the given technical issue.</li>
                            <li>Perform repairs on Apple products and complete tickets using GSX/AST.</li>
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
                </Paper>
                <Paper className={"holder"} elevation={4}>
                    <h2>Skills</h2>
                </Paper>
            </Root>
        </Container>
    )
}
