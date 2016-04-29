import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log('SHORTCUT: ',this.props.shortcut);
    let shortcut = String(this.props.shortcut).replace(//g,'^W');
    let jj = /(.*)\?(.*)/g.exec(shortcut);
    if (jj) {
      shortcut = `${jj[1]}?${jj[2].replace(/./g,"*")}`;
    }
    console.log(jj);


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

