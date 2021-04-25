import { Component } from 'react';
import nextId from 'react-id-generator';
import PropTypes from 'prop-types';
import styles from './ButtonsForFeedback.module.css';

class ButtonsForFeedback extends Component {
  render() {
    return (
      <ul className={styles.ButtonsForFeedback}>
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

ButtonsForFeedback.propTypes = {
  addFeedbackCount: PropTypes.func,
};

export default ButtonsForFeedback;
