// Snippet=> rccp
import React, { Component } from "react";
import { Button, Form, Image, Message } from "semantic-ui-react";
import InlineError from "../InlineError";
import { connect } from "react-redux";
import { onNewMovieSubmit, fetchMovie, onUpdateMovieSubmit } from "../../actions/newMovieActions";
import { Redirect } from 'react-router-dom'
import { newMovieReducer } from '../../reducers/newMovieReducer'

class NewMoviePage extends Component {
  state = {
    title: this.props.willUpdateMovie ? this.props.willUpdateMovie.title: "",
    cover: this.props.willUpdateMovie ? this.props.willUpdateMovie.cover: "",
    errors: {},
  };
componentDidMount() {
  const {willUpdateMovie, match} = this.props
  //console.log("MoviesPage props=>", this.props)
  if(!willUpdateMovie && match.params.id){
    this.props.fetchMovie(match.params.id);
  }
}

// Snippet => cwr
componentWillReceiveProps(nextProps) {
  const {newMovieReducer} =nextProps;
  //console.log(nextProps)
  if(newMovieReducer.movies.data) {
    this.setState({
      title: newMovieReducer.movies.data.title,
      cover: newMovieReducer.movies.data.cover,
    })
  }
}

  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    //console.log("State=>",this.state)
  };

  onSubmit = () => {
    //console.log("You have submitted the form...")
    const errors = this.validate();
    this.setState({ errors });
    // console.log(errors);
    if (Object.keys(errors).length === 0) {
      const id= this.props.match.params.id;
      if (!id) {
        this.props.onNewMovieSubmit(this.state);
      } else {
        this.props.onUpdateMovieSubmit({...this.state, id})
      }
      this.setState({redirect:true})
    }
  };

  validate = () => {
    const errMessage = {};
    if (!this.state.title) errMessage.title = "The title cannot be blank!";
    if (!this.state.cover) errMessage.cover = "The cover cannot be blank!";
    return errMessage;
  };
  render() {
    console.log("NewMoviePage=>",this.props)
    const { errors } = this.state;
    const errorField = ( <Message negative>
      <Message.Header>
        ERROR:
      </Message.Header>
      <p>That offer has expired</p>
    </Message>)
    const movieForm = (
      <Form
      onSubmit={this.onSubmit}
      loading={this.props.newMovieReducer.fetching}
    >
      <Form.Field error={!!errors.title}>
        <label>Title</label>
        <input
          id="title"
          name="title"
          value={this.state.title}
          onChange={this.handleChange}
          placeholder="Title..."
        />
      </Form.Field>
      {errors.title && <InlineError message={errors.title} />}
      <Form.Field error={!!errors.cover}>
        <label>Cover Image URL</label>
        <input
          id="cover"
          name="cover"
          value={this.state.cover}
          onChange={this.handleChange}
          placeholder="Cover Image URL.."
        />
      </Form.Field>
      {errors.cover && <InlineError message={errors.cover} />}
      <Form.Field>
        <Image src={this.state.cover} size="small" />
      </Form.Field>
      <Button color="blue" type="submit">
        Submit
      </Button>
      {
        this.props.newMovieReducer.error.response && errorField
      }
    </Form>
    )
    //console.log(this.props)
    //console.log(this.props.newMovieReducer.error.response)
    return (
      <div>
        <h2>New Movie Form</h2>
        {this.props.newMovieReducer.fetched && this.state.redirect ? <Redirect to="/movies"/>: movieForm}
       </div>
    );
  }
}

const mapStateToProps = ({ newMovieReducer, moviesReducer }, props) => {
  //console.log("newMovieReducer=> ", newMovieReducer)
  //console.log("moviesReducer=> ", moviesReducer)
  //console.log("NewMoviePage props =>", props)
  return { newMovieReducer,
    willUpdateMovie:moviesReducer.movies.find(item => item.id === props.match.params.id)
  };
};
const mapDispatchToProps = {
  onNewMovieSubmit, fetchMovie, onUpdateMovieSubmit
};
export default connect(mapStateToProps, mapDispatchToProps)(NewMoviePage);
