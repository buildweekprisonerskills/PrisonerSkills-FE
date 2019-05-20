import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { friendsFetcher } from "../actions";
import Loader from "react-loader-spinner";
import AddPrisonForm from "./AddPrisonForm";

class Contractors extends React.Component {
  componentDidMount() {
    this.props.friendsFetcher();
  }
  render() {
    console.log(this.props.prisons);
    console.log(this.props.test);
    return (
      <div className="friends">
        {this.props.fetching_friends && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {this.props.prisons.map(prison => (
          <p key={prison.id}>{prison.name}</p>
        ))}
        {this.props.test && (
          <details>
            <summary>test</summary>
            <Link to="/add-prison-form">Add Prison From</Link>
          </details>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ fetching_friends, prisons, test }) => ({
  fetching_friends,
  prisons,
  test
});

export default withRouter(
  connect(
    mapStateToProps,
    { friendsFetcher }
  )(Contractors)
);
