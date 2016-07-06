import React, {Component} from 'react';
import { Link } from 'react-router';
class Home extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to our Github app</h3>
        <p>This will show a basic Github profile page</p>
        <Link to="/search">
          <button className="button-primary">Search for a user</button>
        </Link>
        &nbsp;
        <button className="button-primary">
          Pick a random WDi14 student
        </button>
      </div>
    );
  }
};

export default Home;
