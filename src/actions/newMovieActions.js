import axios from "axios";
import { API_BASE } from "../config/env";

export const NEW_MOVIES_PENDING = "NEW_MOVIES_PENDING";
export const NEW_MOVIES_FULFILLED = "NEW_MOVIES_FULFILLED";
export const NEW_MOVIES_REJECTED = "NEW_MOVIES_REJECTED";

export const UPDATE_MOVIES_PENDING = "UPDATE_MOVIES_PENDING";
export const UPDATE_MOVIES_FULFILLED = "UPDATE_MOVIES_FULFILLED";
export const UPDATE_MOVIES_REJECTED = "UPDATE_MOVIES_REJECTED";

export const FETCH_MOVIES_PENDING = "FETCH_MOVIES_PENDING";
export const FETCH_MOVIES_FULFILLED = "FETCH_MOVIES_FULFILLED";
export const FETCH_MOVIES_REJECTED = "FETCH_MOVIES_REJECTED";

export function onNewMovieSubmit({title, cover}) {
  //console.log('onNewMovieSubmit=>', title, cover)
  return (dispatch) => {
    dispatch({
      type: "NEW_MOVIES",
      payload: axios.post(`${API_BASE}/movies`, {title,cover})
      .then((result) =>result.data),
    });
  };
}

export function fetchMovie(id) {
  return (dispatch) => {
    dispatch({
      type: "FETCH_MOVIES",
      payload: axios.get(`${API_BASE}/movies/${id}`)
    });
  };
}

export function onUpdateMovieSubmit({title, cover,id}) {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_MOVIES",
      payload: axios.put(`${API_BASE}/movies/${id}`, {title,cover})
      //.then((result) =>result.data),
    });
  };
}