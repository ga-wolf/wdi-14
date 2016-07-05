import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <p>This is our first React app</p>
      </div>
    );
  }
};

ReactDOM.render(
  <HelloWorld />,
  document.getElementById("app")
);
