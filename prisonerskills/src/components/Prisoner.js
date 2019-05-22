import React from "react";
import { connect } from "react-redux";
import { withRouter, Route, Link, Router } from "react-router-dom";
import { prisonersFetcher } from "../actions";
class Prisoner extends React.Component {
  constructor() {
    super();
    this.state = {
      stuff: []
    };
  }
  componentDidMount() {
    console.log(this.props.id);
    this.props.prisonersFetcher(this.props.id);
    this.setState({
      ...this.state,
      stuff: this.props.prisoners
    });
  }

  render() {
    console.log(this.state.stuff + " PRIONSERSSSSSSSS");
    return (
      <div className="aa">
        {this.props.prisoners.map(prisoner => {
          if (prisoner.prison_id < 3) {
            return <p key={prisoner.id}>{prisoner.name}</p>;
          } else {
            return <p key={prisoner.id}>AAA</p>;
          }
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ fetching_prisoners, prisoners }) => ({
  fetching_prisoners,
  prisoners
});

export default withRouter(
  connect(
    mapStateToProps,
    { prisonersFetcher }
  )(Prisoner)
);
