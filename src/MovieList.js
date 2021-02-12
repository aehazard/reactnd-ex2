import React, { Component } from 'react';
import FavoriteList from './FavoriteList';

class MovieList extends Component {
  render() {
    const movies = Object.values(this.props.movies)
    const profiles = this.props.profiles
    const users = this.props.users
    return (
      <ol>
      {movies.map( movie =>
      <li>
       <p>
        {movie.name}
      </p>
      <FavoriteList movie = {movie} profiles = {profiles} users = {users}/>
      </li>
        )}
      </ol>
      );
  }
}

export default MovieList