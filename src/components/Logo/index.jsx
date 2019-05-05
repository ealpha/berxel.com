import React, { Component } from 'react';

export default class Logo extends Component {
  render() {
    return (
      <div style={styles.container}>
        <img
          src={require('./images/logo.png')}
          style={styles.logo}
          alt="logo"
        />
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '20px',
  },
  logo: {
    width: '152px',
    marginRight: '16px',
  },
};
