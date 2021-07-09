// Created with rfcp snippet
import React from 'react'
import PropTypes from 'prop-types'

function MovieList({movies}) {
  const movieList = <div>Movies List ready and here...</div>
  const emptyMessage = <div>There is no any movies yet...</div>
  return (
    <div>
      {movies.length === 0 ? emptyMessage : movieList}
    </div>
  )
}

MovieList.propTypes = {

}

export default MovieList

