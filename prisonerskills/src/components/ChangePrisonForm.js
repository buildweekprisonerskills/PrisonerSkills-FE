import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { changePrison } from "../actions";

class ChangePrisonForm extends React.Component {
  state = {
    prison_name: "",
    location: ""
  };

  componentDidMount() {}

  changePrison = e => {
    e.preventDefault();
    this.props.changePrison(this.state);
  };

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="ChangePrisonForm">
        <p>Change Prison Form</p>
        <form onSubmit={this.changePrison}>
          <input
            type="text"
            name="prison_name"
            placeholder="Name of Prison"
            value={this.state.prison_name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="location"
            value={this.state.location}
            onChange={this.handleChange}
          />
          <button>Change Prison</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  changing_prison: state.changing_prison,
  notPrisons: state.notPrisons
});

export default connect(
  mapStateToProps,
  { changePrison }
)(ChangePrisonForm);
