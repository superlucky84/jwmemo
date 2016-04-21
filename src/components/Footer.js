import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {

  constructor(props,children) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div className="right">
        &copy;2016 SUPERLUCKY inc
        </div>
      </footer>
    );

  }
}

