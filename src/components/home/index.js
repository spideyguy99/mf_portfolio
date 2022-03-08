import React from "react";

import {Container, Avatar, Paper} from "@mui/material";
import {styled} from "@mui/material/styles";

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Profile from '../media/profile.jpeg';

import EduAccord from "./accordians/education";
import WorkAccord from "./accordians/workExperience";
import SkillsAccord from "./accordians/skills";

import EduSection from './sections/education';
import WorkSection from './sections/workExperience';
import SkillsSection from "./sections/skills";

const Root = styled('div')(({ theme }) => ({
//Global
    ".background":{backgroundColor:'#90caf9', width:"100%", paddingTop:theme.spacing(10), paddingBottom:theme.spacing(5)},
    ".paper":{
        display:"flex",
        flexWrap:"wrap",
        justifyContent: "space-around",
        padding: theme.spacing(2),
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
      color:"#121212"
    },
    ".header": {
        display: "flex",
        justifyContent: "center",
        marginBottom:theme.spacing(3),
        alignItems:"center"
    },
//Phones and small tablets
    [theme.breakpoints.down('md')]: {
        ".sectionHolder":{
            display:"none"
        },
        ".accordion":{
            display:"inline"
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
            marginTop:25,
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
        ".avatarMobile":{
            height: "auto",
            width:"50%",
            margin:theme.spacing(1),
            marginLeft:"100%",
            marginRight:"100%",
        },
        ".headerDiv":{
            paddingBottom:theme.spacing(1),
            display:"flex",
            justifyContent:"center",
            flexWrap:"wrap"
        },
        ".avatar":{
            display:"none"
        }
        },
//Tablets
    [theme.breakpoints.up('md')]: {
        ".sectionHolder":{
            display:'none'
        },
        ".accordion":{
            display:"inline"
        },
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
        "#skillholder":{
            display:"flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        },
        ".avatar":{
            width:100,
            height:100,
            margin:theme.spacing(1),
            marginRight:theme.spacing(10)
        },
        ".avatarMobile":{
            display:"none"
        }
    },
//Desktops
    [theme.breakpoints.up('lg')]: {
        ".accordion":{
            display:"none"
        },
        ".sectionHolder":{
            display:"inline"
        },
        ".background":{width:"100%"},
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
        ".avatar":{
            width:150,
            height:"auto",
            margin:theme.spacing(3),
        },
        ".avatarMobile":{
            display:"none"
        }
    },
}));

export default function Home(){
    return(
        <Root>
            <div className={"background"}>
                <Container>
                <Paper elevation={4} className={"header"}>
                    <Avatar className={"avatar"} src={Profile} alt={"Profile picture of Noah Furniss"}/>
                    <div className={"headerDiv"}>
                        <Avatar className={"avatarMobile"} src={Profile} alt={"Profile picture of Noah Furniss"}/>
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

                    <div className={"sectionHolder"}>{/*ONLY DISPLAYS ON DESKTOP*/}
                        <EduSection/>
                    </div>

                    <div className={"accordion"}>{/*ONLY DISPLAYS ON TABLETS AND PHONES*/}
                        <EduAccord/>
                    </div>
                </Paper>


                <Paper className={"holder"} elevation={4}>
                    <h2>Work Experience</h2>

                    <div className={"sectionHolder"}>{/*ONLY DISPLAYS ON DESKTOP*/}
                        <WorkSection/>
                    </div>

                    <div className={"accordion"}>{/*ONLY DISPLAYS ON TABLETS AND PHONES*/}
                        <WorkAccord/>
                    </div>
                </Paper>


                <Paper className={"holder"}  elevation={4}>
                    <h2 style={{width:"100%"}}>Skills</h2>

                    <div className={"sectionHolder"}>
                        <SkillsSection/>
                    </div>

                    <div className={"accordion"}>{/*ONLY DISPLAYS ON TABLETS AND PHONES*/}
                        <SkillsAccord/>
                    </div>
                </Paper>
                </Container>
            </div>
        </Root>
    )
}
