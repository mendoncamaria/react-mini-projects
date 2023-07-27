import React, { Component } from 'react';

export default class Textcase extends Component {
  constructor() {
    super();
    this.state = {
      errorMessage: '',
      textValue: '',
      inputValue: '',
    };
  }
  handleTextChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  onUpperCaseClick() {
    this.setState({ textValue: this.state.inputValue.toUpperCase() });
  }
  onLowerCaseClick() {
    this.setState({ textValue: this.state.inputValue.toLowerCase() });
  }
  onTitleCaseClick() {
    this.setState({ textValue: this.state.inputValue.toUpperCase() });
  }
  render() {
    console.log(this.state.inputValue);
    return (
      <div>
        <h1>Textcase converter</h1>
        <p>
          <label>Enter the text</label>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e) => this.handleTextChange(e)}
          />
        </p>
        <p>
          <button onClick={(e) => this.onUpperCaseClick(e)}> Uppercase</button>
        </p>
        <p>
          <button onClick={(e) => this.onLowerCaseClick(e)}> Lowercase</button>
        </p>
        <p>
          <button onClick={(e) => this.onTitleCaseClick(e)}> titlecase</button>
        </p>
        <p>{this.state.errorMessage} </p>
        <p>{this.state.textValue} </p>
      </div>
    );
  }
}
