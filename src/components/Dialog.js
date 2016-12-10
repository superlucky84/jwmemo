import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router'

/* IMPORT ACTIONS */
import {closeDialog, deleteNote, getList, adminChange} from '../actions/jnote'

export default class Dialog extends Component {

  constructor(props) {
    super(props);
    this['deleteNote'] = deleteNote;
    this['getList'] = getList;
    this['adminChange'] = adminChange;
  } 

  handleDialogClose() {
    this.props.dispatch(closeDialog());
  }

  handleDialogSuccess() {

    let successAction = this.props.dialog.successaction.action;
    let successPush = this.props.dialog.successaction.push;

    let param = "";

    if ( ['search','confirm'].indexOf(this.props.dialog.type) > -1 ) {

      if (document.querySelector('.message input')) {
        param = document.querySelector('.message input').value;
      }
      this.props.dispatch(this[successAction](param));
      hashHistory.push(successPush);
    }

    else if ( this.props.dialog.type == 'login' ) {

      param = document.querySelector('.message input').value;
      if ( param.match(/^dufma$/) ) {
        this.props.dispatch(this[successAction](true));
      }
    }


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

  componentDidMount() {
    if (document.querySelector('.message input')) {
      document.querySelector('.message input').focus();
    }
    else {
      document.querySelector('.cancel').focus();
    }
  }


  render() {


    let BOX = null;
    if ( this.props.dialog.type == 'search' ) {
      BOX = <input type="text" onKeyDown={this.handleInputAction.bind(this)} id="searchString" />;
    }
    else if ( this.props.dialog.type == 'login' ) {
      BOX = <input type="password" onKeyDown={this.handleInputAction.bind(this)} id="searchString" />
    }


    return (
      <div id="dialog">
        <div className="dialog-shadow"></div>
        <div className="dialog-box">
          <div className="message">
            <p>
              {this.props.dialog.message}
              <br/>
              {BOX}
            </p>

          </div>
          <div className="button">
            {
              ( ['confirm','search','login'].indexOf(this.props.dialog.type) > -1 )
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

