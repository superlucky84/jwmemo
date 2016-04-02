import React, { Component, PropTypes } from 'react';

export default class Header extends Component {

  constructor(props,children) {
    super(props);
  }


  render() {

    return (
      <header>
        <div className="left">
          <div className="title">Record</div>
          <button>Write</button>
        </div>
        <div className="right">
          <button>Edit</button>
          <button>LOGIN</button>
          <button>SIGNIN</button>
        </div>
      </header>
    );

  }
}

