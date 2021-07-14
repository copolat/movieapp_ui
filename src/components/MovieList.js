// Created with rfcp snippet
import React from "react";
import MovieCard from "./MovieCard";
import { Grid } from "semantic-ui-react";

function MovieList({ movies }) {
  //console.log("Here=> ", movies);
  /*  const movieList = movies.map((movie) => {
    //return <h3 key={movie.id}>{movie.title}</h3>;
    return <MovieCard key={movie.id} movie={movie}/>;
  });
*/
  const movieList = (
    <Grid>
      <Grid.Row columns={4}>
        {movies.map((movie) => (
          <Grid.Column key={movie.id}>
            <MovieCard movie={movie} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
  const emptyMessage = <div>There is no any movies yet...</div>;
  return <div>{movies.length === 0 ? emptyMessage : movieList}</div>;
}

MovieList.propTypes = {};

export default MovieList;
