import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Layer = (props) => {
  return (
    <div class="layer">
      <Button text={props.text.split(' ')[0]} />
      <Button text={props.text.split(' ')[1]} />
      <Button text={props.text.split(' ')[2]} />
    </div>
  );
};

const NumPad = () => {
  return (
    <div class="pad">
      <Layer text={"1 2 3"} />
      <Layer text={"4 5 6"} />
      <Layer text={"7 8 9"} />
    </div>
  );
};

const Input = (props) => {
  return (
    <input type="text" class="input"></input>
  )
}

class Button extends Component {
  constructor(props) {
    super(props);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.state = { text: this.props.text };
  }

  handleMouseClick(event) {
    this.setState({
      text: "Hello World!"
    });
  }

  render() {
    return (
      <div>
        <a class="button" onClick={this.handleMouseClick}>{this.state.text}</a>
      </div>
    )
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleMouseClick = this.handleMouseClick.bind(this);
    this.state = {
      status: "#40e0d0",
    };
  }

  handleMouseClick(event) {
    if (this.state.status === "#010203") {
      this.setState({
        status: "#40e0d0"
      });
    } else {
      this.setState({
        status: "#010203"
      });
    }
  }

  render() {
    return (
      <div style={{ color: this.state.status }} onClick={this.handleMouseClick}>
        <Input value={"hello"} />
        <NumPad />
      </div>
    );
  }
}

export default Calculator;