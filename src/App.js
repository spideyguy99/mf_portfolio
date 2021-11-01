import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Nav from './components/nav';
import Footer from "./components/nav/footer";

export default function App() {

  return (
      <Router>
          <Nav/>
          <Footer/>
      </Router>
  );
}
