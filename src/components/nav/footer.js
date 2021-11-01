import React from "react";

import {BottomNavigation, Typography} from "@mui/material";
import {createTheme, ThemeProvider } from '@mui/material/styles';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer(){

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return(
    <ThemeProvider theme={darkTheme}>
                   <BottomNavigation sx={{height:"100%"}}>
                        <Typography color={"white"} sx={{textAlign:"center"}}>
                            Noah J. Furniss - (765)730-1329 - <a href={"mailto: noahfurniss@gmail.com"} style={{color:"white"}}>noahfurniss@gmail.com (Personal)</a> - <a href={"mailto: nfurniss@iu.edu"} style={{color:"white"}}>nfurniss@iu.edu (Work)</a>
                        <br/>
                        <br/>
                            <div style={{width:"100%", display:"flex", justifyContent:"space-around"}}>
                                <a href={"https://github.com/spideyguy99"} style={{color:"white"}}>
                                    <GitHubIcon className={"icons"}/>
                                </a>
                                <a href={"https://www.linkedin.com/in/noah-furniss-61a682163/"} style={{color:"white"}}>
                                    <LinkedInIcon className={"icons"}/>
                                </a>
                                <a href={"https://www.facebook.com/noah.furniss.73"} style={{color:"white"}}>
                                    <FacebookIcon className={"icons"}/>
                                </a>
                                <a href={"https://www.instagram.com/https.noah99/"} style={{color:"white"}}>
                                    <InstagramIcon className={"icons"}/>
                                </a>
                            </div>
                        </Typography>
                    </BottomNavigation>
                </ThemeProvider>
    )
}