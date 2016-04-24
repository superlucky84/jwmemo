import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux'

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
  handleDialogCancel() {
    this.props.dispatch(closeDialog());
  }

  handleDialogSuccess() {
    let successAction = this.props.dialog.successaction.action;
    let successPush = this.props.dialog.successaction.push;

    this.props.dispatch(this[successAction]());
    this.props.dispatch(push(successPush));
    this.handleDialogClose();
  }

  render() {
    return (
      <div id="dialog">
        <div className="dialog-shadow"></div>
        <div className="dialog-box">
          <div className="close" onClick={this.handleDialogClose.bind(this)}>X</div>
          <div className="message">
            <p>{this.props.dialog.message}</p>
          </div>
          <div className="button">
            <button onClick={this.handleDialogSuccess.bind(this)}>Ok.</button>
            <button onClick={this.handleDialogCancel.bind(this)}>Cancel.</button>
          </div>
        </div>
      </div>
    );
  }
}

