import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router'

/* IMPORT ACTIONS */
import {closeDialog, deleteNote} from '../actions/jnote'

export default class Dialog extends Component {

  constructor(props) {
    super(props);
    this['deleteNote'] = deleteNote;
  } 

  handleDialogClose() {
    this.props.dispatch(closeDialog());
  }

  handleDialogSuccess() {
    let successAction = this.props.dialog.successaction.action;
    let successPush = this.props.dialog.successaction.push;

    this.props.dispatch(this[successAction]());
    hashHistory.push(successPush);
    this.handleDialogClose();
  }

  componentDidUpdate() {
    document.querySelector('.cancel').focus();
  }

  render() {
    return (
      <div id="dialog">
        <div className="dialog-shadow"></div>
        <div className="dialog-box">
          <div className="message">
            <p>{this.props.dialog.message}</p>
          </div>
          <div className="button">
            {
              ( this.props.dialog.type == 'confirm' )
              ? <button onClick={this.handleDialogSuccess.bind(this)}>Ok.</button>
              : null
            }
            <button className='cancel' onClick={this.handleDialogClose.bind(this)}>Cancel.</button>
          </div>
        </div>
      </div>
    );
  }
}

