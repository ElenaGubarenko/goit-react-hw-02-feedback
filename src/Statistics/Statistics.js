import { Component } from 'react';

class Statistics extends Component {
  render() {
    return (
      <>
        <h2>Statistics</h2>
        <ul>
          {this.props.stateDataForRender.map(data => (
            <li key={data}>
              {data[0]}: {data[1]}
            </li>
          ))}
        </ul>
        <ul>
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

export default Statistics;
