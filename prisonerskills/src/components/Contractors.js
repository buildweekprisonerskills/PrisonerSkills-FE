import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { friendsFetcher, prisonsFetcher } from "../actions";
import Loader from "react-loader-spinner";
import AddPrisonForm from "./AddPrisonForm";
import Prisoner from "./Prisoner";
import index from "../auth/";

class Contractors extends React.Component {
  componentDidMount() {
    //this.props.friendsFetcher();
    this.props.prisonsFetcher();
  }
  render() {
    console.log(this.props.prisons);
    console.log(this.props.test);
    console.log(this.props.notPrisons + " cors");
    return (
      <div className="friends">
        {this.props.fetching_friends && (
          <div className="key spinner">
            <Loader type="Puff" color="#204963" height="60" width="60" />
            <p>Loading Data</p>
          </div>
        )}
        {this.props.prisons.map(prison => (
          <div key={prison.id}>
            <Link to={"/inmate-" + prison.id}>Prison {prison.name}</Link>
            <Route path={"/inmate-" + prison.id} component={Prisoner} />
          </div>
        ))}

        {this.props.test && (
          <details>
            <summary>test</summary>
            <Link to="/add-prison-form">Add Prison Form</Link>
          </details>
        )}
        {this.props.notPrisons.map(notprison => (
          <div key={notprison.id}>
            <p>{notprison.prsion_name}</p>
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
  notPrisons
}) => ({
  fetching_friends,
  prisons,
  test,
  oldhide,
  notPrisons,
  fetching_prisons2
});

export default withRouter(
  connect(
    mapStateToProps,
    { prisonsFetcher }
  )(index(Contractors))
);
