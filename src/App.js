import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { experimentalStyled as styled } from '@mui/material/styles';


import Home from './components/home';
import Projects from "./components/projects";

export default function App() {

  const allTabs = ['/', '/projects'];

    const Root = styled('div')(({ theme }) => ({

        [theme.breakpoints.down('md')]: {
            ".tab":{
                width:"50%"
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
                        <Tabs value={location.pathname}>
                          <Tab label="About Me" value="/" component={Link} to={allTabs[0]} className={"tab"} />
                          <Tab label="Projects" value="/projects" component={Link} to={allTabs[1]} className={"tab"}/>
                        </Tabs>
                            <Switch>
                                <Route path={allTabs[1]} render={() => <Projects/>} />
                                <Route path={allTabs[0]} render={() => <Home/>} />
                            </Switch>
                    </Fragment>
                  )}
              />
            </Root>
        </div>
      </Router>
  );
}
