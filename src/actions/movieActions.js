import axios from 'axios'
import { API_BASE } from '../config/env'
export const FETCHED_MOVIES = "FETCHED_MOVIES"
export const FETCHED_MOVIES_ERROR = "FETCHED_MOVIES_ERROR"

export function fetchMovies() {
  return dispatch => {axios.get(`${API_BASE}/movies`)
  .then(result => result.data)
  .then(data=> dispatch({type:FETCHED_MOVIES, payload:data}))
  .catch(error=> dispatch({type:FETCHED_MOVIES_ERROR, payload:error}))}
}