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
  render() {
    let todoItems = this.props.todos.map((todo) => {
      return ( <li key={Math.random()}>{todo}</li> );
    });
    console.log( todoItems );
    return (
      <ul>
        {todoItems}
      </ul>
    );
  }
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
