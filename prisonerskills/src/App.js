import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contractors from "./components/Contractors";
import Administration from "./components/Administration";
import AddPrisonForm from "./components/AddPrisonForm";
import AddPrisonerForm from "./components/AddPrisonerForm";
import { connect } from "react-redux";
import prisons from "./testdata.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="myHeader">
            <div className="adminLink">
              <Link to="/administration" className="administration">
                Administration
              </Link>
            </div>
            <div className="contractLink">
              <Link to="/contractors" className="contractors">
                Contractors
              </Link>
            </div>
            {this.props.test && (
              <div>
                <div className="contractLink">
                  <Link className="contractors" to="/add-prisoner-form">
                    Add Prisoners Form
                  </Link>
                </div>
                <div className="contractLink">
                  <Link className="contractors" to="/add-prison-form">
                    Add Prison Form
                  </Link>
                </div>
              </div>
            )}
          </header>
          <Route path="/contractors" component={Contractors} />
          <Route path="/administration" component={Administration} />
          <Route path="/add-prisoner-form" component={AddPrisonForm} />
          <Route path="/add-prison-form" component={AddPrisonerForm} />
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
