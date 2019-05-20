import React from "react";
import { connect } from "react-redux";
import { admin } from "../actions";
//import Button from "@material-ui/core/button";

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
        <p>Admin Goes Here</p>
        <form onSubmit={this.admin}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <button>Login</button>
        </form>
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
