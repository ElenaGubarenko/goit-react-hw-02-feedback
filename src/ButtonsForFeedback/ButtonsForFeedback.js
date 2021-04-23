import { Component } from 'react';
import nextId from 'react-id-generator';

class ButtonsForFeedback extends Component {
  render() {
    return (
      <ul>
        {this.props.props.map(prop => (
          <button
            name={prop}
            key={nextId()}
            onClick={this.props.addFeedbackCount}
          >
            {prop}
          </button>
        ))}
      </ul>
    );
  }
}

export default ButtonsForFeedback;
