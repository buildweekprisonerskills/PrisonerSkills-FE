import React from "react";
import { connect } from "react-redux";
import { admin } from "../actions";
import "./Administration.css";
//import Button from "@material-ui/core/button";
import os2 from "../img/OS Copy 2.png";
import oversite from "../img/oversite.png";

class Administration extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  // capture input field and puts them on state

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  admin = e => {
    e.preventDefault();
    this.props.admin(this.state.credentials).then(() => {
      this.props.history.push("/contractors");
    });
  };

  render() {
    return (
      <div className="Admin">
        <div className="adminForm">
          <img src={os2} alt="oversite letters" />
          <img src={oversite} alt="oversite word" />

          <p className="adminLoginText">Login to OverSite</p>
          <form onSubmit={this.admin}>
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChanges}
              className="osForm"
            />
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChanges}
              className="osForm"
            />
            <button className="osButton">Login</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.isLoggedIn
});

export default connect(
  mapStateToProps,
  { admin }
)(Administration);
