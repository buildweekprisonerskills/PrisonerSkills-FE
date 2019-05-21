import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

axios.interceptors.request.use(function(requestConfig) {
  const token = localStorage.getItem("token");
  requestConfig.headers.authorization = token;
  return requestConfig;
});

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem("token");
      const notLoggedIn = (
        <div>
          <h3 className="Need-Authorization">Please login to see the users</h3>
          <Link className="Student-List-Link" to="administration">
            Go to Login
          </Link>
        </div>
      );

      return <>{token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
