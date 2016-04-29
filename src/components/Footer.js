import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log('SHORTCUT: ',this.props.shortcut);
    let shortcut = String(this.props.shortcut).replace(//g,'^W');
    let privateChar = /(.*)\?(.*)/g.exec(shortcut);
    if (privateChar) {
      shortcut = `${privateChar[1]}?${privateChar[2].replace(/./g,"*")}`;
    }


    return (
      <footer>
        {
          ( this.props.shortcut )
          ? <div className="left">{shortcut}</div>
          : null
        }
        <div className="right">
          &copy;2016 SUPERLUCKY inc
        </div>
      </footer>
    );

  }
}

