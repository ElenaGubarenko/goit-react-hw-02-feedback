import { Component } from 'react';
import nextId from 'react-id-generator';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonId = nextId();

  countTotalFeedback = () => {
    const arrOfStateValues = Object.values(this.state);
    const stateValuesSum = arrOfStateValues.reduce(
      (acc, value) => acc + value,
      0,
    );
    console.log(stateValuesSum);
  };

  addFeedbackCount = e => {
    const targetName = e.target.name;

    for (let key in this.state) {
      if (targetName === key) {
        this.setState(prevState => {
          return { [key]: prevState[key] + 1 };
        });
      }
    }
    this.countTotalFeedback();
  };

  render() {
    const props = this.props.feedbackCategories;
    const stateForRender = this.state;
    const stateDataForRender = Object.entries(stateForRender);
    // props.map(prop => console.log(prop));

    return (
      <div>
        <h1>Please, leave feedback</h1>
        <ul>
          {props.map(prop => (
            <button name={prop} key={prop} onClick={this.addFeedbackCount}>
              {prop}
            </button>
          ))}
        </ul>

        <h2>Statistics</h2>
        <ul>
          {stateDataForRender.map(data => (
            <li key={data}>
              {data[0]}: {data[1]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Feedback;
