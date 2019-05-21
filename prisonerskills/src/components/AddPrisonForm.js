import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { addPrison } from "../actions";

class AddPrisonForm extends React.Component {
  state = {
    name: "",
    location: "",
    prisoners: []
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
    console.log(this.props.prisons.length);
    return (
      <div className="prisonForm">
        <p> Add Prison Form </p>
        <form onSubmit={this.addPrison}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleChanges}
          />
          <input
            type="text"
            name="location"
            placeholder="location"
            value={this.state.location}
            onChange={this.handleChanges}
          />
          <button>Add new prison</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  adding_prison: state.adding_prison,
  prisons: state.prisons
});

export default connect(
  mapStateToProps,
  { addPrison }
)(AddPrisonForm);
