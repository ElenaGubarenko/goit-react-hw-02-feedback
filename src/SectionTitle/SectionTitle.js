import { Component } from 'react';

class SectionTitle extends Component {
  render() {
    return (
      <div>
        <h1>Please, leave feedback</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default SectionTitle;
