import React, { Component, PropTypes } from 'react';

class UserDetails extends Component {
  render() {
    return (
      <div>
        <h3><em>{this.props.routeParams.username}</em></h3>
      </div>
    );
  }
};
UserDetails.contextTypes = {
  router: PropTypes.object.isRequired
};

export default UserDetails;
