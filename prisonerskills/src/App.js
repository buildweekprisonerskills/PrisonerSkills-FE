import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contractors from "./components/Contractors";
import Administration from "./components/Administration";
import AddPrisonForm from "./components/AddPrisonForm";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="myHeader">
            <Link to="/administration">Administration</Link>
            <Link to="/contractors">Contractors</Link>
            {this.props.test && (
              <Link to="/add-prison-form">Add Prison Form</Link>
            )}
          </header>
          <Route path="/contractors" component={Contractors} />
          <Route path="/administration" component={Administration} />
          <Route path="/add-prison-form" component={AddPrisonForm} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ test }) => ({
  test
});

export default connect(
  mapStateToProps,
  {}
)(App);
