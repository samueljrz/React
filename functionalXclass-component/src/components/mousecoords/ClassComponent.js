import React, { Component } from "react";
import "./styles.css";

class ClassComponent extends Component {
  state = {
    coordinates: { x: 0, y: 0 },
    clickCount: 0,
  };
  
  mouseClickHandler = this.mouseClickHandler.bind(this)

  async componentDidMount() {
    console.log('DidMount')
    document.addEventListener("click", this.mouseClickHandler);
  }

  async mouseClickHandler(event) {
    console.log('DidUpdate')
    this.setState({clickCount: this.state.clickCount + 1})
    this.setState({ coordinates: { x: event.clientX, y: event.clientY } });
  }

  async componentWillUnmount() {
    console.log('DidUnmount')
    document.removeEventListener("click", this.mouseClickHandler);
  }

  render = () => (
    <div>
      {this.state.coordinates.x},{this.state.coordinates.y} - {this.state.clickCount}
    </div>
  );
}

export default ClassComponent;
