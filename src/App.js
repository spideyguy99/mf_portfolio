import React, {Fragment} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Home from './components/home';
import Projects from "./components/projects";



export default function App() {

  const allTabs = ['/', '/projects'];


  return (
      <Router>
        <div className="App">
          <Route
              path="/"
              render={({ location }) => (
                  <Fragment>
                    <Tabs value={location.pathname}>
                      <Tab label="About Me" value="/" component={Link} to={allTabs[0]} />
                      <Tab label="Projects" value="/projects" component={Link} to={allTabs[1]} />
                    </Tabs>
                    <Switch>
                      <Route path={allTabs[1]} render={() => <Projects/>} />
                      <Route path={allTabs[0]} render={() => <Home/>} />
                    </Switch>
                  </Fragment>
              )}
          />
        </div>
      </Router>
  );
}
