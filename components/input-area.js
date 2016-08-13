import React, {Component} from 'react';

export class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.setText = this.setText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  setText(evt) {
    this.setState({ text: evt.target.value });
  }

  handleClick() {
    this.props.onSubmit(this.state.text);
  }

  render() {
    return (
      <div>
        <input value={this.state.text} onChange={this.setText}/>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
InputArea.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
};