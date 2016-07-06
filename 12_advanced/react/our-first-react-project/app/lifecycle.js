import React from 'react';
import ReactDOM from 'react-dom';

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
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleInputChange} />
        <h1>{this.state.text}</h1>
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
