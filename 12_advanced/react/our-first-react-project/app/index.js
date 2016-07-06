import React from 'react';
import ReactDOM from 'react-dom';

// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World</h1>
//         <p>This is our first React app</p>
//       </div>
//     );
//   }
// };

// class HelloUser extends React.Component {
//   render() {
//     console.log( this );
//     return (
//       <div>
//         <h3>Hello {this.props.name}</h3>
//         <p>{this.props.tagline}</p>
//       </div>
//     );
//   }
// };
//
// ReactDOM.render(
//   <HelloUser name="quartet" tagline="great ideas start here" />,
//   document.getElementById("app")
// );

class ShowTodos extends React.Component {
  constructor() {
    super(); // inherit everything from React.Component
    this.state = { // setInitialState life cycle hook
      loading: true
    };
  }
  componentWillMount() {
    // We want to wait 500ms, then change this.state.loading = false
    window.setTimeout(function () {
      this.setState({
        loading: false
      });
    }.bind(this), 5000);
  }
  render() {
    let todoItems = this.props.todos.map((todo) => {
      return ( <li key={Math.random()}>{todo}</li> );
    });

    if ( this.state.loading ) {
      return (
        <p>Loading...</p>
      );
    }

    return (
      <ul>
        {todoItems}
      </ul>
    );
  }
};
ShowTodos.propTypes = {
  todos: React.PropTypes.array.isRequired,
  num: React.PropTypes.number
};


class TodosContainer extends React.Component {
  render() {
    let todos = [ "First todo", "Second todo", "Third todo" ];
    return (
      <div>
        <h3>All todos</h3>
        <ShowTodos todos={todos} />
      </div>
    );
  }
};
ReactDOM.render(
  <TodosContainer />,
  document.getElementById("app")
);
