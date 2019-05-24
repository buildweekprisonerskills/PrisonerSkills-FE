import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";

export const admin = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://buildweekprisonerskills.herokuapp.com/api/login/", creds)
    .then(res => {
      console.log(res.data.token + "aaa");
      localStorage.setItem("token", res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
    })
    .catch(err => console.log(err));
};

export const FETCHING_PRISONS_START = "FETCHING_PRISONS_START";
export const FETCHING_PRISONS_SUCCESS = "FETCHING_PRISONS_SUCCESS";
export const FETCHING_PRISONS_ERROR = "FETCHING_PRISONS_ERROR";

export const prisonsFetcher = () => dispatch => {
  dispatch({ type: FETCHING_PRISONS_START });
  axiosWithAuth()
    .get("https://buildweekprisonerskills.herokuapp.com/api/allPrisonsRoute/")
    .then(res => {
      //console.log(res.data + " AAA");
      dispatch({ type: FETCHING_PRISONS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      //console.log(err + " jjjjj");
      dispatch({ type: FETCHING_PRISONS_ERROR });
    });
};

export const FETCHING_PRISONERS_START = "FETCHING_PRISONERS_START";
export const FETCHING_PRISONERS_SUCCESS = "FETCHING_PRISONERS_SUCCESS";
export const FETCHING_PRISONERS_ERROR = "FETCHING_PRISONERS_ERROR";

export const prisonersFetcher = id => dispatch => {
  dispatch({ type: FETCHING_PRISONERS_START });
  axiosWithAuth()
    .get(
      `https://buildweekprisonerskills.herokuapp.com/api/allPrisonsRoute/prisoners/`
    )
    .then(res => {
      //console.log(res.data + " BBB");
      dispatch({ type: FETCHING_PRISONERS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err + " yyyy");
      dispatch({ type: FETCHING_PRISONERS_ERROR });
    });
};

export const ADD_PRISONER_START = "ADD_PRISONER_START";
export const ADD_PRISONER_SUCCESS = "ADD_PRISONER_SUCCESS";
export const ADD_PRISONER_ERROR = "ADD_PRISONER_ERROR";

export const addPrisoner = prison => dispatch => {
  dispatch({ type: ADD_PRISONER_START });
  axiosWithAuth()
    .post(
      `https://buildweekprisonerskills.herokuapp.com/api/prisonRoute/prisoners/${1}`,
      prison
    )
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_PRISONER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_PRISONER_ERROR });
    });
};

export const ADD_PRISON_START = "ADD_PRISON_START";
export const ADD_PRISON_SUCCESS = "ADD_PRISON_SUCCESS";
export const ADD_PRISON_ERROR = "ADD_PRISON_ERROR";

export const addPrison = prison => dispatch => {
  dispatch({ type: ADD_PRISONER_START });
  axiosWithAuth()
    .post(
      `https://buildweekprisonerskills.herokuapp.com/api/prisonRoute/1/`,
      prison
    )
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_PRISON_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: ADD_PRISON_ERROR });
    });
};

export const CHANGE_PRISON_START = "CHANGE_PRISON_START";
export const CHANGE_PRISON_SUCCESS = "CHANGE_PRISON_SUCCESS";
export const CHANGE_PRISON_ERROR = "CHANGE_PRISON_ERROR";

export const changePrison = prison => dispatch => {
  dispatch({ type: CHANGE_PRISON_START });
  axiosWithAuth()
    .put(
      `https://buildweekprisonerskills.herokuapp.com/api/prisonRoute/1/`,
      prison
    )
    .then(res => {
      console.log(res, " TTTTTT");
      dispatch({ type: CHANGE_PRISON_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: CHANGE_PRISON_ERROR });
    });
};

export const DELETE_PRISON_START = "DELETE_PRISON_START";
export const DELETE_PRISON_SUCCESS = "DELETE_PRISON_SUCCESS";
export const DELETE_PRISON_ERROR = "DELETE_PRISON_ERROR";

export const deletePrison = () => dispatch => {
  dispatch({ type: DELETE_PRISON_START });
  axiosWithAuth()
    .delete(`https://buildweekprisonerskills.herokuapp.com/api/prisonRoute/2/`)
    .then(res => {
      console.log("This is the response:  " + res);
      dispatch({ type: DELETE_PRISON_SUCCESS });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: DELETE_PRISON_ERROR });
    });
};
