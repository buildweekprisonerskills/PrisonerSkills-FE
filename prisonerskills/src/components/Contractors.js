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
      newPrisons: [],
      testPrison: {},
      holder: 0
    };
  }
  componentDidMount() {
    this.props.prisonsFetcher();
    this.props.prisonersFetcher(1);
    this.setState({
      prisons: this.props.prisoners
    });
  }

  doublePass = thing => {
    this.props.prisonersFetcher(thing);
  };

  incrementPlus = () => {
    this.setState({
      holder: (this.holder += 1)
    });
  };

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
    let newArray = this.props.prisoners.map(prisoner => {
      if (prisoner.name === event) {
        emptyArray.push(prisoner);
      }
    });
    console.log(emptyArray + " helllo");
    this.setState({ newPrisons: emptyArray });
  };

  render() {
    console.log(this.state.input);
    console.log(this.state.prisons);
    console.log(this.props.notPrisons);
    console.log(this.state.holder);
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
          <div key={prison.id} />
        ))}
        {/*
        {this.props.test && (
          <details>
            <summary>test</summary>
            <Link to="/add-prison-form">Add Prison Form</Link>
          </details>
        )}
	 */}
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
                  <summary>Prisoners</summary>
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

          <div className="prisonsFromAuth">
            {this.props.notPrisons.map(notPrison => (
              <div className="prisons">
                <div className="prisonArea">
                  <p>{notPrison.prison_name}</p>
                  <details className="prisoners">
                    <summary>Prisoners</summary>
                    {this.props.prisoners.map(prisoner => {
                      if (prisoner.prison_id === notPrison.id) {
                        return (
                          <div>
                            {this.incrementPlus}
                            <details>
                              <summary>{prisoner.name}</summary>
                              <p>{prisoner.skills}</p>
                            </details>
                          </div>
                        );
                      } else {
                        return <div />;
                      }
                    })}
                  </details>
                  <p>{notPrison.location}</p>
                </div>
              </div>
            ))}
          </div>
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
              <div className="filtered" key={newPrisoner.name}>
                <p>{newPrisoner.name}</p>
                <p>{newPrisoner.skills}</p>
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
