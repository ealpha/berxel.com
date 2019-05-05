import React, { Component } from 'react';
import About from '../About';
import Team from '../Team';
import Technology from '../Technology';
import Investment from '../Investment';
import Contact from '../Contact';

export default class ScrollScreen extends Component {
  static displayName = 'ScrollScreen';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <div id="page1" style={styles.section}>
          <About />
        </div>
        <div id="page2" style={styles.section}>
          <Team />
        </div>
        <div id="page3" style={styles.section}>
          <Investment />
        </div>
        <div id="page4" style={styles.section}>
          <Technology />
        </div>
        <div id="page5" style={styles.section}>
          <Contact />
        </div>
      </div>
    );
  }
}

const styles = {
  section: {
    height: '100vh',
    overflow: 'hidden',
  },
};
