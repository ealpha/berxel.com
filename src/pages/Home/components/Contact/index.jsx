import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

export default class Contact extends Component {
  static displayName = 'Contact';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
        </div>
        <div style={styles.copyright}>
          © 2018-2020 Berxel. All rights Reserved.
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100%',
    background: `url(${require('./images/contact.png')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '348px',
    paddingLeft: '600px',
    paddingRight: '100px',
    width: '100%',
    zIndex: '10',
  },
  title: {
    fontSize: '32px',
    lineHeight: '48px',
    letterSpacing: '24px',
    fontWeight: '600',
    color: '#fff',

  },
  subtitle: {
    fontSize: '28px',
    paddingTop: '50px',
    lineHeight: '32px',
    letterSpacing: '3px',
    fontWeight: '300',
    color: '#fff',
  },
  copyright: {
    position: 'absolute',
    fontSize: '16px',
    left: '450px',
    bottom: '10px',
    height: '16px',
    textAlign: 'center',
    letterSpacing: '3px',
    color: '#000',
  },

};
