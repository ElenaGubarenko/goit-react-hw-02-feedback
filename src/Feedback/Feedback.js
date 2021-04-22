import { Component } from 'react';
// import nextId from 'react-id-generator';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // buttonId = nextId();

  method = () => {};

  render() {
    const props = this.props.feedbackCategories;
    const stateForRender = this.state;
    const stateDataForRender = Object.entries(stateForRender);

    return (
      <div>
        <h1>Please, leave feedback</h1>
        <ul>
          {props.map(prop => (
            <button onClick={this.method}>{prop}</button>
          ))}
        </ul>
        <h2>Statistics</h2>
        <ul>
          {stateDataForRender.map(data => (
            <li>
              {data[0]}: {data[1]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Feedback;
