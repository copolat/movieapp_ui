import {
  FETCHED_MOVIES_PENDING,
  FETCHED_MOVIES_FULFILLED,
  FETCHED_MOVIES_REJECTED /*FETCHED_MOVIES_ERROR*/,
  DELETE_MOVIES_PENDING,
  DELETE_MOVIES_FULFILLED,
  DELETE_MOVIES_REJECTED
} from "../actions/movieActions";
// Create with rxreducer snippet
const initialState = {
  fecthing: false,
  DELETE: false,
  movies: [],
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCHED_MOVIES_PENDING:
      return { ...state, fecthing: true, fetched: false };
    case FETCHED_MOVIES_FULFILLED:
      return { ...state, fecthing: false, fetched: true, movies: payload };
    case FETCHED_MOVIES_REJECTED:
      return { ...state, fecthing: false, fetched: true, error: payload };
    /*case DELETE_MOVIES_ERROR:
    return { ...state, error:payload }; */

    //DELETE MOVIE
    case DELETE_MOVIES_PENDING:
      return { ...state, fecthing: true, fetched: false };
    case DELETE_MOVIES_FULFILLED:
      return { ...state, fecthing: false, fetched: true, 
        movies: state.movies.filter(item=>item.id !== payload.id)
      };
    case DELETE_MOVIES_REJECTED:
      return { ...state, fecthing: false, fetched: true, error: payload };
    default:
      return state;
  }
};
