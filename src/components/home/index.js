import React from "react";

import {Container, Avatar, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Paintball from '../media/paintball.JPG';
import Quadline from '../media/quadLine.JPG';
import Ultteam from '../media/ultTeam.JPG';
import Longboard from '../media/longboard.jpg';
import Profile from '../media/profile.jpeg';

const Root = styled('div')(({ theme }) => ({
//Global
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
    "#skill":{
    width:"auto",
    display:"block"
    },
    ".icons":{
      color:"black"
    },
    "#activityHolder":{
        marginBottom:theme.spacing(5)
    },
    ".activityImg":{
        borderRadius:4 ,
        width:"100%",
    },
    ".header": {
        display: "flex",
        justifyContent: "center",
        marginTop:theme.spacing(10),
        marginBottom:theme.spacing(3)
    },
//Phones and small tablets
    [theme.breakpoints.down('md')]: {
        ".activityImg":{
            width:"100%",
           aspectRatio:"16:9"
        },
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
        },
        "#skill":{
            width:"auto",
            display:"block"
        },
        "#activity":{
           display:"block"
        },
        ".avatar":{
            display:"none"
        },
        div:{
            padding:theme.spacing(1)
        }
        },
//Tablets
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
        },
        "#skill":{
            width:"40%",
            display:"block"
        },
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
        "#skillholder":{
            display:"flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        },
        ".avatar":{
            width:100,
            height:100,
            margin:theme.spacing(1),
        }
    },
//Desktops
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
        },
        "#skill":{
            display:"block",
            width:"45%"
        },
        "#skillholder":{
            display:"flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
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
        ".avatar":{
            width:150,
            height:"auto",
            margin:theme.spacing(3),
        }
    },
}));

export default function Home(){
    return(
        <Container>
            <Root>
                <Paper elevation={4} className={"header"}>
                    <Avatar className={"avatar"} src={Profile} alt={"Profile picture of Noah Furniss"}/>
                    <div>
                        <h1>Hey, I'm Noah :)</h1>
                        <p  style={{paddingBottom:5}}>I make fun websites and work on computers!</p>
                    </div>

                </Paper>

                <Paper elevation={4} className={"paper"}>
                    <a href={"https://github.com/spideyguy99"}>
                        <GitHubIcon className={"icons"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/noah-furniss-61a682163/"}>
                        <LinkedInIcon className={"icons"}/>
                    </a>
                    <a href={"https://www.facebook.com/noah.furniss.73"}>
                        <FacebookIcon className={"icons"}/>
                    </a>
                    <a href={"https://www.instagram.com/https.noah99/"}>
                        <InstagramIcon className={"icons"}/>
                    </a>
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
                            <p>School of Science New Media</p>
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


                <Paper className={"holder"} id={"skillholder"} elevation={4}>
                    <h2 style={{width:"100%"}}>Skills</h2>
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
                            <li>Linux (Ubuntu)</li>
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
                </Paper>


                <Paper className={"holder"} elevation={4} id={"activityHolder"}>
                    <h2 style={{width:"100%"}}>Activities</h2>
                    <Paper className={"paperinpaper"} id={"activity"} elevation={6}>
                        <img src={Ultteam} className={"activityImg"} alt={"IUPUI's ultimate frisbee team."}/>
                        <h4 className={"activityHeader"}>Ultimate Frisbee</h4>
                        <p>Club Vice President</p>
                    </Paper>
                    <Paper className={"paperinpaper"} id={"activity"} elevation={6}>
                        <img src={Longboard} className={"activityImg"} alt={"My longboard"}/>
                        <h4 className={"activityHeader"}>Longboarding</h4>
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
                </Paper>
            </Root>
        </Container>
    )
}
