import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { addPrison } from "../actions";

class AddPrisonForm extends React.Component {
  state = {
    id: 1,
    name: "",
    skills: "",
    description: "test",
    prison_id: 1
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
        <p> Add Prisoner Form </p>
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
            name="skills"
            placeholder="skills"
            value={this.state.skills}
            onChange={this.handleChanges}
          />
          <button>Add new prisoner</button>
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
