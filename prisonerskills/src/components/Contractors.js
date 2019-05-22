import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { friendsFetcher, prisonsFetcher, prisonersFetcher } from "../actions";
import Loader from "react-loader-spinner";
import AddPrisonForm from "./AddPrisonForm";
import Prisoner from "./Prisoner";
import index from "../auth/";

class Contractors extends React.Component {
  componentDidMount() {
    this.props.prisonsFetcher();
  }
  render() {
    console.log(this.props.notPrisons + " cors");
    console.log(this.props.prisoners + " prisoners");

    return (
      <div className="friends">
        {this.props.fetching_friends && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {/*
        {this.props.prisons.map(prison => (
          <div key={prison.id}>
            <Link to={"/inmate-" + prison.id}>Prison {prison.name}</Link>
            <Route
              path={"/inmate-" + prison.id}
              component={Prisoner}
              prisonersFetcher={this.props.prisonersFetcher}
            />
          </div>
        ))}
	 */}
        {this.props.test && (
          <details>
            <summary>test</summary>
            <Link to="/add-prison-form">Add Prison Form</Link>
          </details>
        )}
        {this.props.notPrisons.map(notprison => (
          <div key={notprison.id}>
            <p>{notprison.prison_name}</p>
            <Prisoner id={notprison.id} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({
  fetching_friends,
  prisons,
  test,
  oldhide,
  fetching_prisons2,
  notPrisons,
  prisoners,
  fetching_prisoners
}) => ({
  fetching_friends,
  prisons,
  test,
  oldhide,
  notPrisons,
  fetching_prisons2,
  prisoners,
  fetching_prisoners
});

export default withRouter(
  connect(
    mapStateToProps,
    { prisonsFetcher, prisonersFetcher }
  )(Contractors)
);
