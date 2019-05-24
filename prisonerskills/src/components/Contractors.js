import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { prisonsFetcher, prisonersFetcher } from "../actions";
import Loader from "react-loader-spinner";
import AddPrisonForm from "./AddPrisonForm";
import Prisoner from "./Prisoner";
import index from "../auth/";
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
    console.log(this.state.prisons);
    console.log(this.props.notPrisons);
    return (
      <div className="backgroundWrap">
        <div className="friends">
          <div className="prisonsAndInmates">
            {this.state.prisons.map(prison => (
              <div className="prisons" key={prison.id}>
                <div className="prisonArea">
                  <p>{prison.name}</p>
                  <details className="prisoners">
                    <summary>Prisoners</summary>
                    {prison.prisoners.map(prisoner => (
                      <div key={prisoner.id}>
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
                <div className="prisons" key={notPrison.id}>
                  <div className="prisonArea">
                    <p>{notPrison.prison_name}</p>
                    <details className="prisoners">
                      <summary>Prisoners</summary>
                      {this.props.prisoners.map(prisoner => {
                        if (prisoner.prison_id === notPrison.id) {
                          return (
                            <div key={prisoner.id}>
                              {this.incrementPlus}
                              <details>
                                <summary>{prisoner.name}</summary>
                                <p>{prisoner.skills}</p>
                              </details>
                            </div>
                          );
                        } else {
                          return <div key={prisoner.id} />;
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
              <button type="submit" className="submit">
                Filter Posts
              </button>
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
      </div>
    );
  }
}

const mapStateToProps = ({
  prisons,
  test,
  oldhide,
  fetching_prisons2,
  notPrisons,
  prisoners,
  fetching_prisoners
}) => ({
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
