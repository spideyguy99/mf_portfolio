import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { experimentalStyled as styled, createTheme, ThemeProvider } from '@mui/material/styles';


import Home from './components/home';
import Projects from "./components/projects";
import {Avatar, AppBar} from "@mui/material";
import Profile from "./components/media/profile.jpeg";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";

export default function App() {

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

  const allTabs = ['/', '/projects'];

    const Root = styled('div')(({ theme }) => ({
        a:{
            color:"white"
        },

        [theme.breakpoints.down('md')]: {
            ".tab":{
                width:"50%"
            },
            Avatar:{
                display:"none"
            }
        },
    }));

  return (
      <Router>
        <div className="App">
            <Root>
              <Route
                  path="/"
                  render={({ location }) => (
                    <Fragment>
                        <ThemeProvider theme={darkTheme}>
                            <AppBar position={"fixed"} >
                                <Tabs value={location.pathname} textColor={"primary"}>
                                    <Tab label="About Me" value="/" component={Link} to={allTabs[0]} className={"tab"} />
                                    <Tab label="Projects" value="/projects" component={Link} to={allTabs[1]} className={"tab"}/>
                                    <Avatar alt={"Noah Furniss"} src={Profile} style={{height:"100%"}}/>
                                </Tabs>
                            </AppBar>
                        </ThemeProvider>
                            <Switch>
                                <Route path={allTabs[1]} render={() => <Projects/>} />
                                <Route path={allTabs[0]} render={() => <Home/>} />
                            </Switch>
                        {/*<ThemeProvider theme={darkTheme}>*/}
                        {/*    <BottomNavigation>*/}
                        {/*        <Typography color={"white"} sx={{textAlign:"center"}}>*/}
                        {/*            Noah J. Furniss - (765)730-1329 - <a href={"mailto: noahfurniss@gmail.com"}>noahfurniss@gmail.com (Personal)</a> - <a href={"mailto: nfurniss@iu.edu"}>nfurniss@iu.edu (Work)</a>*/}
                        {/*        <br/>*/}
                        {/*            <div>*/}
                        {/*                <a href={"https://github.com/spideyguy99"}>*/}
                        {/*                    <GitHubIcon className={"icons"}/>*/}
                        {/*                </a>*/}
                        {/*                <a href={"https://www.linkedin.com/in/noah-furniss-61a682163/"}>*/}
                        {/*                    <LinkedInIcon className={"icons"}/>*/}
                        {/*                </a>*/}
                        {/*                <a href={"https://www.facebook.com/noah.furniss.73"}>*/}
                        {/*                    <FacebookIcon className={"icons"}/>*/}
                        {/*                </a>*/}
                        {/*                <a href={"https://www.instagram.com/https.noah99/"}>*/}
                        {/*                    <InstagramIcon className={"icons"}/>*/}
                        {/*                </a>*/}
                        {/*            </div>*/}
                        {/*        </Typography>*/}

                        {/*    </BottomNavigation>*/}
                        {/*</ThemeProvider>*/}
                    </Fragment>
                  )}
              />
            </Root>
        </div>
      </Router>
  );
}
