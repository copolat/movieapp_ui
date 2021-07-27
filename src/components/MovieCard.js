import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom'

const proccessButtons = (movieId, deleteMovie) =>{
  return (
    <Button.Group>
    <Button animated="vertical" as={Link} to={`/movie/${movieId}`}>
      <Button.Content visible>Edit</Button.Content>
      <Button.Content hidden>
        <Icon name="edit" />
      </Button.Content>
    </Button>
    <Button animated="vertical" onClick={()=>deleteMovie(movieId)}>
      <Button.Content visible>Delete</Button.Content>
      <Button.Content hidden>
        <Icon name="trash alternate" />
      </Button.Content>
    </Button>
  </Button.Group>
  )
};
const MovieCard = ({ movie, deleteMovie }) => (
  <Card>
    <Image src={movie.cover} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{movie.title}</Card.Header>
      <Card.Meta>
        <span className="date">{movie.year}</span>
      </Card.Meta>
      <Card.Description>{movie.category}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="star" />
        {movie.imdb_score}
      </a>
    </Card.Content>
    <Card.Content extra>{proccessButtons(movie.id, deleteMovie)}</Card.Content>
  </Card>
);

export default MovieCard;
