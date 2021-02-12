import React, { Component } from 'react';

class FavoriteList extends Component {
  render() {
    const movie = this.props.movie
    const profiles = this.props.profiles
    const users = this.props.users
    const profileList = profiles.filter( profile => profile.favoriteMovieID === String(movie.id))
    console.log(profileList)
    if (profileList.length > 0) {
      return (<ul>{profileList.map(profile => <li>{users[profile.id].name}</li>)}</ul>)
    } else {
      return (<p>No one</p>)
    }
  }
}

export default FavoriteList