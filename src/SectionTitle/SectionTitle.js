import { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './SectionTitle.module.css';

class SectionTitle extends Component {
  render() {
    return (
      <div className={styles.SectionTitle}>
        <h1>Please, leave feedback</h1>
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default SectionTitle;
