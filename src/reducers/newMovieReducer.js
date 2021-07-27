import {
  NEW_MOVIES_PENDING,
  NEW_MOVIES_FULFILLED,
  NEW_MOVIES_REJECTED,
  UPDATE_MOVIES_PENDING,
  UPDATE_MOVIES_FULFILLED,
  UPDATE_MOVIES_REJECTED,
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_FULFILLED,
  FETCH_MOVIES_REJECTED
} from "../actions/newMovieActions";
// Create with rxreducer snippet
const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  error: {},
  redirect:false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case NEW_MOVIES_PENDING:
      return { ...state, fetching: true, fetched: false };
    case NEW_MOVIES_FULFILLED:
      return { ...state, fetching: false, fetched: true, movies: payload };
    case NEW_MOVIES_REJECTED:
      return { ...state, fetching: false, fetched: true, error: payload };
      //UPDATE MOVIE
      case UPDATE_MOVIES_PENDING:
        return { ...state, fetching: true, fetched: false };
      case UPDATE_MOVIES_FULFILLED:
        return { ...state, fetching: false, fetched: true, movies: payload };
      case UPDATE_MOVIES_REJECTED:
        return { ...state, fetching: false, fetched: true, error: payload };

    //FETCH MOVIE
      case FETCH_MOVIES_PENDING:
        return { ...state, fetching: true, fetched: false };
      case FETCH_MOVIES_FULFILLED:
        return { ...state, fetching: false, fetched: true, movies: payload };
      case FETCH_MOVIES_REJECTED:
        return { ...state, fetching: false, fetched: true, error: payload };
    default:
      return state;
  }
};
