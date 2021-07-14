// Created with rcredux snippet
import React, { Component } from "react";
import { connect } from "react-redux";
import moviesReducer from "../../reducers/moviesReducer";
import PropTypes from "prop-types";
import MovieList from "../MovieList";
import { fetchMovies } from "../../actions/movieActions";
import {ScaleLoader} from "react-spinners";
export class MoviesPage extends Component {
  static propTypes = { moviesReducer: PropTypes.object.isRequired };
  // cdm snippet
  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    console.log(this.props);
    const errMessage = this.props.moviesReducer.error.message;
    return (
      <div>
        <h2>Movies List</h2>
        <ScaleLoader loading={this.props.moviesReducer.fecthing} height={100} width={8} radius={10} color={"#36D7B7"} margin={4}/>
        {errMessage ? (
          <h3>Error in retrieving data. Details: {errMessage}</h3>
        ) : (
          <MovieList movies={this.props.moviesReducer.movies} />
        )}
        <hr />
      </div>
    );
  }
}

//const mapStateToProps = (state) => ({movies:state.moviesReducer})
const mapStateToProps = ({ moviesReducer }) => ({ moviesReducer });

const mapDispatchToProps = { fetchMovies };

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);
