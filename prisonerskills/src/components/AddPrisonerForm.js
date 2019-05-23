import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { addPrisoner } from "../actions";

class AddPrisonerForm extends React.Component {
  state = {
    prison_name: "",
    location: "",
    username_id: 1
  };

  componentDidMount() {}

  addPrisoner = e => {
    e.preventDefault();
    this.props.addPrisoner(this.state);
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
        <form onSubmit={this.addPrisoner}>
          <input
            type="text"
            name="prison_name"
            placeholder="Prison Name"
            value={this.state.prison_name}
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
  { addPrisoner }
)(AddPrisonerForm);
