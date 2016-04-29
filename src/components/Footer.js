import React, { Component, PropTypes } from 'react';

export default class Footer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log('SHORTCUT: ',this.props.shortcut);

    return (
      <footer>
        {
          ( this.props.shortcut )
          ? <div className="left">{this.props.shortcut.replace(//g,'^W')}</div>
          : null
        }
        <div className="right">
          &copy;2016 SUPERLUCKY inc
        </div>
      </footer>
    );

  }
}

