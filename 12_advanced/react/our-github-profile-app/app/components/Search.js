import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div>
        <input type="text" name="search" placeholder="Username: " />
        <br />
        <input type="submit" className="button-primary" value="Search" />
      </div>
    );
  }
};

export default Search;
