import axios from "axios";
import { API_BASE } from "../config/env";
export const FETCHED_MOVIES = "FETCHED_MOVIES";
export const FETCHED_MOVIES_PENDING = "FETCHED_MOVIES_PENDING";
export const FETCHED_MOVIES_FULFILLED = "FETCHED_MOVIES_FULFILLED";
export const FETCHED_MOVIES_REJECTED = "FETCHED_MOVIES_REJECTED";
//export const FETCHED_MOVIES_ERROR = "FETCHED_MOVIES_ERROR";

/* export function fetchMovies() {
  return dispatch => {axios.get(`${API_BASE}/movies`)
  .then(result => result.data)
  .then(data=> dispatch({type:FETCHED_MOVIES, payload:data}))
  .catch(error=> dispatch({type:FETCHED_MOVIES_ERROR, payload:error}))}
} */
export function fetchMovies() {
  return (dispatch) => {
    dispatch({
      type: FETCHED_MOVIES,
      payload: axios.get(`${API_BASE}/movies`).then((result) => result.data),
    });
  };
}
