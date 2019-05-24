import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { addPrison } from "../actions";
import "./addaddchange.css";

class AddPrisonForm extends React.Component {
  state = {
    prison_name: "",
    location: "",
    username_id: 1
  };

  componentDidMount() {}

  addPrison = e => {
    e.preventDefault();
    this.props.addPrison(this.state);
  };

  handleChanges = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state);

    return (
      <div className="prisonForm">
        <p> Add Prison Form </p>
        <form onSubmit={this.addPrison}>
          <input
            type="text"
            name="prison_name"
            placeholder="Prison Name"
            value={this.state.prison_name}
            onChange={this.handleChanges}
            className="prisonInput"
          />
          <input
            type="text"
            name="location"
            placeholder="location"
            value={this.state.location}
            onChange={this.handleChanges}
            className="prisonInput"
          />
          <button className="prisonButton">Add new prison</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adding_prison: state.adding_prison,
  notPrisons: state.notPrisons
});

export default connect(
  mapStateToProps,
  { addPrison }
)(AddPrisonForm);
