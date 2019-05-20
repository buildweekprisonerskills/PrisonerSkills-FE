import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const admin = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("http://localhost:5000/api/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
    })
    .catch(err => console.log(err));
};

export const FETCHING_FRIENDS_START = "FETCHING_FRIENDS_START";
export const FETCHING_FRIENDS_SUCCESS = "FETCHING_FRIENDS_SUCCESS";
export const FETCHING_FRIENDS_ERROR = "FETCHING_FRIENDS_ERROR";

export const friendsFetcher = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS_START });
  axios
    .get("http://localhost:5000/api/friends")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHING_FRIENDS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: FETCHING_FRIENDS_ERROR });
    });
};
