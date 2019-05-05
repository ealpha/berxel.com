import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';

export default class Team extends Component {
  static displayName = 'Team';

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
              全球光学领导者团队
            </div>
            <div key="subtitle" style={styles.subtitle}>
              博升光电的创始团队由世界知名的科研团队、生产团队以及企业管理团队组成，为 VCSEL 的科研和产业化做出了卓越的贡献。
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
    background: `url(${require('./images/team.png')})`,
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
    bottom: '10px',
    height: '16px',
    textAlign: 'center',
    letterSpacing: '3px',
    color: '#000',
  },
};
