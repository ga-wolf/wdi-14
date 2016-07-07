import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  pickRandomStudent(e) {
    const students = ["airwoman", "arimado", "cayliejzm", "cedricamoyal", "danharsanyi", "donnzh", "fbi1714", "jadarling", "jessakang", "mokahontas", "monalisinghi", "more-like-a-puma", "mr-black-8", "onesc", "panza87", "paula-white", "yumidev"];
    const chosenStudent = students[Math.floor(Math.random()* students.length)];

    this.context.router.push( `/details/${chosenStudent}` );
  }
  render() {
    return (
      <div>
        <h3><em>Welcome to our Github app</em></h3>
        <p>This will show a basic Github profile page</p>
        <Link to="/search">
          <button className="button-primary">Search for a user</button>
        </Link>
        &nbsp;
        <button
          className="button-primary" onClick={this.pickRandomStudent.bind(this)}>
            Pick a random WDi14 student
        </button>
      </div>
    );
  }
};
Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home;
