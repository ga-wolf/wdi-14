import React, { Component } from 'react';

class UserProfile extends Component {
  render() {

    if ( !this.props.user.login ) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <h5>Stats</h5>
        <p>Followers: {this.props.user.followers}</p>
        <p>Following: {this.props.user.following}</p>
        <p>Public Repositories: {this.props.user.public_repos}</p>
        <p>Public Gists: {this.props.user.public_gists}</p>
      </div>
    );
  }
};

export default UserProfile;
