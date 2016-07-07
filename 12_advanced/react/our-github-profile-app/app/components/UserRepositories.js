import React, { Component } from 'react';

class UserRepositories extends Component {
  render() {
    if ( !this.props.repos ) {
      return ( <div>Loading...</div> );
    }
    let repos = this.props.repos.map((repo) => {
      return (
        <li key={repo.id}>
          <a href={repo.html_url} target="_blank">
            {repo.name}
          </a>
        </li>
      );
    });
    return (
      <div>
        <h5>Repositories</h5>
        <ul>
          {repos}
        </ul>
      </div>
    );
  }
};

export default UserRepositories;
