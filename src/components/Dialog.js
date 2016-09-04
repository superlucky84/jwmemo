import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router'

/* IMPORT ACTIONS */
import {closeDialog, deleteNote, getList} from '../actions/jnote'

export default class Dialog extends Component {

  constructor(props) {
    super(props);
    this['deleteNote'] = deleteNote;
    this['getList'] = getList;
  } 

  handleDialogClose() {
    this.props.dispatch(closeDialog());
  }

  handleDialogSuccess() {
    let successAction = this.props.dialog.successaction.action;
    let successPush = this.props.dialog.successaction.push;

    let param = "";
    if (document.querySelector('.message input')) {
      param = document.querySelector('.message input').value;
    }

    this.props.dispatch(this[successAction](param));
    hashHistory.push(successPush);
    this.handleDialogClose();
  }
  handleInputAction(event) {
    if (event.keyCode == 27) {
      this.handleDialogClose();
    }
    else if (event.keyCode == 13) {
      this.handleDialogSuccess();
    }
  }

  componentDidUpdate() {
    if (document.querySelector('.message input')) {
      document.querySelector('.message input').focus();
    }
    else {
      document.querySelector('.cancel').focus();
    }

  }

  render() {
    return (
      <div id="dialog">
        <div className="dialog-shadow"></div>
        <div className="dialog-box">
          <div className="message">
            <p>
              {this.props.dialog.message}
              <br/>
              {
                ( this.props.dialog.type == 'search' )
                ? <input type="text" onKeyDown={this.handleInputAction.bind(this)} id="searchString" />
                : null
              }
            </p>

          </div>
          <div className="button">
            {
              ( this.props.dialog.type == 'confirm' || this.props.dialog.type == 'search'  )
              ? <button onClick={this.handleDialogSuccess.bind(this,event)}>Ok.</button>
              : null
            }
            <button className='cancel' onClick={this.handleDialogClose.bind(this)}>Cancel.</button>
          </div>
        </div>
      </div>
    );
  }
}

