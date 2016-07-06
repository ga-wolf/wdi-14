import React from 'react';
import ReactDOM from 'react-dom';

class ChildComponent extends React.Component {
  // <ChildComponent />
  constructor() {
    super(); // Inherits all of the functionality from React.Component
    console.log("ChildComponent: constructor");
  }
  componentWillMount() {
    // Component is about to start loading to the page
      // Do things that will take time here (AJAX etc.)
    console.log("ChildComponent: componentWillMount");
  }
  render() {
    // Start manipulating the DOM
    console.log("ChildComponent: render");
    return (
      <div>
        <h2>CHILD COMPONENT</h2>
        <p>this.props.text: {this.props.text}</p>
      </div>
    );
  }
  componentDidMount() {
    // After the manipulation of the DOM has finished
    console.log("ChildComponent: componentDidMount");
  }
  componentWillUnmount() {
    // When the component is removed from the DOM
    console.log("ChildComponent: componentWillUnmount");
  }
  componentWillReceiveProps(nextProps) {
    // This will run every time the props that it receives change
    console.log("ChildComponent: componentWillReceiveProps", nextProps);
  }
  shouldComponentUpdate() {
    // Performance
      // Decide whether you want to go ahead and re-render this component
    console.log("ChildComponent: shouldComponentUpdate");
    return true;
  }
  componentWillUpdate() {
    // Before the re-render
      // Shadow DOM (Virtual DOM) is about to merge with the DOM
    console.log("ChildComponent: componentWillUpdate");
  }
  componentDidUpdate() {
    // When the Virtual DOM and the DOM are back in sync
    console.log("ChildComponent: componentDidUpdate");
  }
}

class ParentComponent extends React.Component {
  constructor() {
    super();
    console.log("ParentComponent: getInitialState");
    this.state = { text: '' };

    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillMount() {
    console.log("ParentComponent: componentWillMount");
  }
  render() {
    console.log("ParentComponent: render");
    return (
      <div className="container">
        <h2>PARENT COMPONENT</h2>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange} />
        <p>this.state.text: {this.state.text}</p>
        <hr />
        <ChildComponent text={this.state.text} />
      </div>
    );
  }
  componentDidMount() {
    console.log("ParentComponent: componentDidMount");
  }
  componentWillUnmount() {
    console.log("ParentComponent: componentWillUnmount");
  }
  handleInputChange(e) {
    this.setState({
      text: e.currentTarget.value
    }, () => {
      // setState is asynchronous - passing a callback will help
    });
  }
};
console.log("ParentComponent: getDefaultProps");
ParentComponent.defaultProps = {
  text: ''
};
ParentComponent.propTypes = {
  text: React.PropTypes.string.isRequired
};

ReactDOM.render(
  <ParentComponent />,
  document.getElementById("app")
);
