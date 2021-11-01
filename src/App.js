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

import Nav from './components/nav';
import Footer from "./components/nav/footer";
import Home from './components/home';
import Projects from "./components/projects";
import AboutMe from './components/about';

import {AppBar, BottomNavigation, Typography} from "@mui/material";

export default function App() {

  return (
      <Router>
          <Nav/>
          <Footer/>
      </Router>
  );
}
