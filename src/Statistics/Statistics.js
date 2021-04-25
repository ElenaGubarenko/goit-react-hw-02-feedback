import { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

class Statistics extends Component {
  render() {
    return (
      <>
        <h2>Statistics</h2>
        <ul className={styles.Statistics}>
          {this.props.stateDataForRender.map(data => (
            <li key={data}>
              {data[0]}: {data[1]}
            </li>
          ))}
        </ul>
        <ul className={styles.Statistics}>
          <li>total: {this.props.countTotalFeedback}</li>
          <li>
            positive feedback:{' '}
            {this.props.state.good > 0
              ? this.props.countPositiveFeedbackPercentage
              : 0}
            %
          </li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  stateDataForRender: PropTypes.array,
  countTotalFeedback: PropTypes.number,
};

export default Statistics;
