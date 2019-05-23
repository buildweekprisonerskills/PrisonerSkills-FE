import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { friendsFetcher, prisonsFetcher, prisonersFetcher } from "../actions";
import Loader from "react-loader-spinner";
import AddPrisonForm from "./AddPrisonForm";
import Prisoner from "./Prisoner";
import index from "../auth/";
import prisons from "../testdata.js";
import "./Contractors.css";

class Contractors extends React.Component {
  constructor() {
    super();
    this.state = {
      input: "",
      prisons: [],
      newPrisons: []
    };
  }
  componentDidMount() {
    this.props.prisonsFetcher();
    this.setState({
      prisons: prisons
    });
  }

  onUpdate = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.searchFilter(this.state.input);
  };

  searchFilter = event => {
    let emptyArray = [];
    let newArray = this.state.prisons.map(prison => {
      prison.prisoners.map(prisoner => {
        if (prisoner.name1 === event) {
          emptyArray.push(prisoner);
        }
      });
    });
    console.log(emptyArray);
    this.setState({ newPrisons: emptyArray });
  };

  render() {
    console.log(this.props.notPrisons + " cors");
    console.log(this.props.prisoners + " prisoners");
    console.log(prisons);
    console.log(this.state);
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
            <Route
              path={"/inmate-" + prison.id}
              component={Prisoner}
              prisonersFetcher={this.props.prisonersFetcher}
            />
          </div>
        ))}

        {this.props.test && (
          <details>
            <summary>test</summary>
            <Link to="/add-prison-form">Add Prison Form</Link>
          </details>
        )}
        {/*
        {this.props.notPrisons.map(notprison => (
          <div key={notprison.id}>
            <p>{notprison.prison_name}</p>
            <Prisoner id={notprison.id} />
          </div>
        ))}
	 */}
        <div className="prisonsAndInmates">
          {this.state.prisons.map(prison => (
            <div className="prisons">
              <div className="prisonArea">
                <p>{prison.name}</p>
                <details className="prisoners">
                  <summary>{prison.prisoners.length} - Prisoners</summary>

                  {prison.prisoners.map(prisoner => (
                    <div>
                      <details>
                        <summary>{prisoner.name1}</summary>
                        <p>{prisoner.skills1}</p>
                      </details>
                    </div>
                  ))}
                </details>
                <p>{prison.location}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="searchSquare">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="input"
              id="what"
              placeholder="Type usernames here..."
              value={this.state.input}
              onChange={this.onUpdate}
            />
            <button type="submit">Filter Posts</button>
          </form>

          <div className="notFiltered">
            <p>Filtered inmates</p>
            {this.state.newPrisons.map(newPrisoner => (
              <div className="filtered">
                <p>{newPrisoner.name1}</p>
                <p>{newPrisoner.skills1}</p>
              </div>
            ))}
          </div>
        </div>
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
