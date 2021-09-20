import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import Home from './components/home';
import Projects from "./components/projects";



export default function App() {

  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Router>
        <div>
          <Box>
            <Tabs
                value={value}
                onChange={handleChange}
            >
              <Tab value="one" label="Item One" />
              <Tab value="two" label="Item Two" />
            </Tabs>
          </Box>

          <Switch>
            <Route path={"/"} exact component={Home}/>
            <Route path={"/projects"} component={Projects}/>
          </Switch>
        </div>
      </Router>
  );
}
