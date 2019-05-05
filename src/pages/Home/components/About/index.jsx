import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

export default class About extends Component {
  static displayName = 'About';

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
          <QueueAnim delay={200} duration={1000} interval={300} type="bottom">
            <div key="title" style={styles.title}>
              照亮三维世界的新光源
            </div>
            <div key="subtitle" style={styles.subtitle}>
              博升光电是技术领先全球的光电半导体科技公司，由全球著名科学家创办，公司致力于为客户提供新一代 VCSEL 解决方案。
            </div>
          </QueueAnim>
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
    marginTop: '78px',
    background: `url(${require('./images/bg.png')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '270px',
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
    color: '#003366',
  },
  subtitle: {
    fontSize: '28px',
    paddingTop: '50px',
    lineHeight: '32px',
    letterSpacing: '3px',
    fontWeight: '300',
    color: '#000',
  },
  copyright: {
    position: 'absolute',
    fontSize: '16px',
    left: '450px',
    bottom: '88px',
    height: '16px',
    textAlign: 'center',
    letterSpacing: '3px',
    color: '#000',
  },

};
