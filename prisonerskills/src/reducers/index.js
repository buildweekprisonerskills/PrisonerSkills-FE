import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FETCHING_FRIENDS_START,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_ERROR,
  ADD_PRISON_START,
  ADD_PRISON_SUCCESS,
  ADD_PRISON_ERROR
} from "../actions";

const intialState = {
  isLoggedIn: false,
  error: "",
  fetching_prisons: false,
  prisons: [],
  test: false,
  adding_prison: false
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggedIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        error: "",
        test: true
      };
    case FETCHING_FRIENDS_START:
      return {
        ...state,
        fetching_friends: true,
        error: ""
      };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        fetching_friends: false,
        prisons: action.payload,
        error: ""
      };
    case ADD_PRISON_START:
      return {
        ...state,
        adding_prison: true,
        error: ""
      };
    case ADD_PRISON_SUCCESS:
      return {
        ...state,
        adding_prison: false,
        prisons: action.payload
      };
    case ADD_PRISON_ERROR:
      return {
        ...state,
        adding_prison: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
