import React, { Component } from 'react';

export default class SlackSliderNavPrev extends Component {
  render() {
    return (
      <span {...this.props}>
        <img
          src={require('./images/left.svg')}
          alt="prev slide"
        />
      </span>
    );
  };
};
