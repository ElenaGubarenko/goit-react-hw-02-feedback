import { Component } from 'react';
import nextId from 'react-id-generator';
import Statistics from '../Statistics';
import ButtonsForFeedback from '../ButtonsForFeedback';
import SectionTitle from '../SectionTitle';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const arrOfStateValues = Object.values(this.state);
    const stateValuesSum = arrOfStateValues.reduce(
      (acc, value) => acc + value,
      0,
    );
    return stateValuesSum;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage =
      (this.state.good / this.countTotalFeedback()) * 100;
    return Math.round(positivePercentage);
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
    this.countPositiveFeedbackPercentage();
  };

  render() {
    const props = this.props.feedbackCategories;
    const stateForRender = this.state;
    const stateDataForRender = Object.entries(stateForRender);

    return (
      <div>
        <SectionTitle>
          <ButtonsForFeedback
            key={nextId()}
            props={props}
            addFeedbackCount={this.addFeedbackCount}
          />
          {this.state.good > 0 ||
          this.state.neutral > 0 ||
          this.state.bad > 0 ? (
            <Statistics
              key={nextId()}
              stateDataForRender={stateDataForRender}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
              state={this.state}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </SectionTitle>
      </div>
    );
  }
}
export default Feedback;
