import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  ADD_PRISON_START,
  ADD_PRISON_SUCCESS,
  ADD_PRISON_ERROR,
  FETCHING_PRISONS_START,
  FETCHING_PRISONS_SUCCESS,
  FETCHING_PRISONS_ERROR,
  FETCHING_PRISONERS_START,
  FETCHING_PRISONERS_SUCCESS,
  FETCHING_PRISONERS_ERROR,
  ADD_PRISONER_START,
  ADD_PRISONER_SUCCESS,
  ADD_PRISONER_ERROR,
  CHANGE_PRISON_START,
  CHANGE_PRISON_SUCCESS,
  CHANGE_PRISON_ERROR,
  DELETE_PRISON_START,
  DELETE_PRISON_SUCCESS,
  DELETE_PRISON_ERROR
} from "../actions";

const intialState = {
  isLoggedIn: false,
  error: "",
  fetching_prisons: false,
  prisons: [],
  test: false,
  adding_prison: false,
  notPrisons: [],
  fetching_prisons2: false,
  prisoners: [],
  fetching_prisoners: false,
  changing_prison: false,
  deleting_prison: false,
  adding_prisoner: false
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
    case ADD_PRISONER_START:
      return {
        ...state,
        adding_prisoner: true,
        error: ""
      };
    case ADD_PRISONER_SUCCESS:
      return {
        ...state,
        adding_prisoner: false,
        prisoners: state.prisoners.map(prisoner => {
          if (prisoner.id === action.payload.id) {
            return action.payload;
          } else {
            return prisoner;
          }
        })
      };
    case ADD_PRISONER_ERROR:
      return {
        ...state,
        adding_prisoner: false,
        error: action.payload
      };
    case FETCHING_PRISONS_START:
      return {
        ...state,
        fetching_prisons2: true,
        error: ""
      };
    case FETCHING_PRISONS_SUCCESS:
      return {
        ...state,
        fetching_prisons2: false,
        notPrisons: action.payload,
        test: true
      };
    case FETCHING_PRISONS_ERROR:
      return {
        ...state,
        fetching_prisons2: false,
        error: ""
      };
    case FETCHING_PRISONERS_START:
      return {
        ...state,
        fetching_prisoners: false,
        error: ""
      };
    case FETCHING_PRISONERS_SUCCESS:
      return {
        ...state,
        fetching_prisoners: true,
        prisoners: action.payload
      };
    case FETCHING_PRISONERS_ERROR:
      return {
        ...state,
        fetching_prisoners: false,
        error: ""
      };
    case ADD_PRISON_START:
      return {
        ...state,
        adding_prison: false,
        error: ""
      };
    case ADD_PRISON_SUCCESS:
      return {
        ...state,
        adding_prison: true,
        notPrisons: state.notPrisons.map(prisons => {
          if (prisons.id === action.payload.id) {
            return action.payload;
          } else {
            return prisons;
          }
        })
      };
    case ADD_PRISON_ERROR:
      return {
        ...state,
        adding_prison: false,
        error: ""
      };
    case CHANGE_PRISON_START:
      return {
        ...state,
        changing_prison: false,
        error: ""
      };
    case CHANGE_PRISON_SUCCESS:
      return {
        ...state,
        changing_prison: true,
        notPrisons: state.notPrisons.map(prisons => {
          if (prisons.id === action.payload.id) {
            return action.payload;
          } else {
            return prisons;
          }
        })
      };
    case CHANGE_PRISON_ERROR:
      return {
        ...state,
        changing_prison: false,
        error: ""
      };
    case DELETE_PRISON_START:
      return {
        ...state,
        deleting_prison: false,
        error: ""
      };
    case DELETE_PRISON_SUCCESS:
      return {
        ...state,
        deleting_prison: true,
        notPrisons: action.payload
      };
    case DELETE_PRISON_ERROR:
      return {
        ...state,
        deleting_prison: false,
        error: ""
      };
    default:
      return state;
  }
};

export default reducer;
