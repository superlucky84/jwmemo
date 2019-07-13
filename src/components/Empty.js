import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';
import Scroll from './juc/Scroll';


export default class Empty extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let splitStyle = null;
    if (this.props.realleft) {
      splitStyle = {
        left: "calc("+this.props.realleft+"% + 7px)"
      };
    }

    return (
      <div className="view" style={splitStyle}>

        <Scroll>
          <div
            className="markdown-body"
          >EMPTY</div>
        </Scroll>

      </div>
    );
  }
}

