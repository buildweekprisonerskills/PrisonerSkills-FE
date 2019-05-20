import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contractors from "./components/Contractors";
import Administration from "./components/Administration";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="myHeader">
          <Link to="/administration">Administration</Link>
          <Link to="/contractors">Contractors</Link>
        </header>
        <Route path="/contractors" component={Contractors} /> *
        <Route path="/administration" component={Administration} />
      </div>
    </Router>
  );
}

export default App;
