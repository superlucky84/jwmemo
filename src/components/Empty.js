import React, { Component, PropTypes } from 'react';


export default class Empty extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let splitStyle = null;
    if (this.props.realleft) {
      splitStyle = {
        left: "calc("+this.props.realleft+"% + 2px)"
      }
    }

    return (
      <div className="view" style={splitStyle}>Empty</div>
    );
  }
}

