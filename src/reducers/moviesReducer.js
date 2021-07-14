import { FETCHED_MOVIES_PENDING, FETCHED_MOVIES_FULFILLED, FETCHED_MOVIES_REJECTED/*FETCHED_MOVIES_ERROR*/ } from '../actions/movieActions'
// Create with rxreducer snippet
const initialState = {
  fecthing: false,
  fetched: false,
  movies:[],
  error:{}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
case FETCHED_MOVIES_PENDING:
    return { ...state, fecthing:true, fetched:false }; 
case FETCHED_MOVIES_FULFILLED:
    return { ...state, fecthing:false, fetched:true, movies:payload }; 
case FETCHED_MOVIES_REJECTED:
    return { ...state, fecthing:false, fetched:true, error:payload }; 
/*case FETCHED_MOVIES_ERROR:
    return { ...state, error:payload }; */
  default:
    return state
  }
}
