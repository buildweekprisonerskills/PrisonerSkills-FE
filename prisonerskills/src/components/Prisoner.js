import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";

class Prisoner extends React.Component {
  constructor() {
    super();
  }
  render() {
    console.log(this.props.match);
    return <div className="prisoners">{this.props.prisonName}</div>;
  }
}

export default Prisoner;
