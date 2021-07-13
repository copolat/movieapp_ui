import { FETCHED_MOVIES, FETCHED_MOVIES_ERROR } from '../actions/movieActions'
// Create with rxreducer snippet
const initialState = {
  fecthing: false,
  fetched: false,
  movies:[],
  error:{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
case FETCHED_MOVIES:
    return { ...state, movies:payload }; 
case FETCHED_MOVIES_ERROR:
    return { ...state, error:payload }; 
  default:
    return state
  }
}
