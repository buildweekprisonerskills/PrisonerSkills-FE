import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { deletePrison } from "../actions";
import "./addaddchange.css";

class DeletePrisoner extends React.Component {
  componentDidMount() {}

  deletePrisoner = e => {
    e.preventDefault();
    this.props.deletePrison();
  };

  render() {
    return (
      <div>
        <p> Delete Prisoner </p>
        <button onClick={this.deletePrisoner} className="prisonButton">
          Click Me
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  deleting_prison: state.deleting_prison
});

export default connect(
  mapStateToProps,
  { deletePrison }
)(DeletePrisoner);
