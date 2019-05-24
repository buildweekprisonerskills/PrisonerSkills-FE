import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Contractors from "./components/Contractors";
import Administration from "./components/Administration";
import AddPrisonForm from "./components/AddPrisonForm";
import AddPrisonerForm from "./components/AddPrisonerForm";
import ChangePrisonForm from "./components/ChangePrisonForm";
import DeletePrisoner from "./components/DeletePrisoner";
import { connect } from "react-redux";

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
          <header className="myHeader2">
            <h2>OS</h2>
            <div>
              Please refresh the page if you encounter a prison.prisoners is
              undefined error while navigating to the contractors page
            </div>
            <div className="myHeader">
              <div className="adminLink">
                <Link to="/administration" className="administration">
                  Administration
                </Link>
              </div>
              <div className="contractLink">
                <Link to="/contractors" className="contractors1">
                  Contractors
                </Link>
              </div>
              {this.props.test && (
                <div className="something">
                  <div className="contractLink">
                    <Link className="contractors1" to="/add-prisoner-form">
                      Add Prisoners Form
                    </Link>
                  </div>
                  <div className="contractLink">
                    <Link className="contractors1" to="/add-prison-form">
                      Add Prison Form
                    </Link>
                  </div>
                  <div className="contractLink">
                    <Link className="contractors1" to="/change-prison-form">
                      Change Prison Form
                    </Link>
                  </div>
                  <div className="contractLink">
                    <Link className="contractors1" to="/delete-prison">
                      Delete Prison
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </header>

          <Route path="/contractors" component={Contractors} />
          <Route path="/administration" component={Administration} />
          <Route path="/add-prisoner-form" component={AddPrisonerForm} />
          <Route path="/add-prison-form" component={AddPrisonForm} />
          <Route exact path="/" component={Contractors} />
          <Route path="/change-prison-form" component={ChangePrisonForm} />
          <Route path="/delete-prison" component={DeletePrisoner} />
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
