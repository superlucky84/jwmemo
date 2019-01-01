import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';
import dispatcher from '../dispatcher.js';
/* IMPORT ACTIONS */
import {adminChange, writeNote, editNote, deleteNote ,updateForm, togglePreview, openDialog} from '../actions/jnote';

class Header extends Component {

  constructor(props) {
    super(props);
    this.noteId = null;
  }

  handleChangeWritepage() {

    dispatcher(updateForm('title',''));
    dispatcher(updateForm('note',''));
    hashHistory.push('/write');

    // Previe 열기
    if ( !this.props.preview ) {
      dispatcher(togglePreview());
    }
  }

  handleEditMemo() {
    dispatcher(updateForm('sync'));
    hashHistory.push('/write/'+this.noteId);

    // Previe 열기
    if ( !this.props.preview ) {
      dispatcher(togglePreview());
    }
  }
  handleWriteCancel() {

    // Previe 닫음
    if ( this.props.preview ) {
      dispatcher(togglePreview());
    }

    if (this.noteId) {
      hashHistory.push('/view/'+this.noteId);
    }
    else {
      hashHistory.push('/');
    }
  }

  async handleWriteMemo() {

    if ( !this.props.adminMode ) {
      dispatcher(openDialog('alert','You have no authority.'));
      return;
    };

    // Previe 닫음
    if ( this.props.preview ) {
      await dispatcher(togglePreview());
    }

    // 수정
    if (this.noteId) {
      await dispatcher(editNote(this.noteId));

      hashHistory.push('/view/'+this.noteId);
    }
    // 생성
    else {
      dispatcher(writeNote());
    }
  }

  handleDeleteMemo() {

    if ( !this.props.adminMode ) {
      dispatcher(openDialog('alert','You have no authority.'));
      return;
    };

    // Previe 닫음
    if ( this.props.preview ) {
      dispatcher(togglePreview());
    }

    // ACTION
    dispatcher(openDialog('confirm', 'Really?', {
      action: 'deleteNote',
      push: '/'
    }));
  }

  handleShowPreview() {
    dispatcher(togglePreview());
  }

  handleOpenDailog() {
    dispatcher(openDialog('confirm','test'));
  }

  handleLogin() {
    dispatcher(openDialog('login','login'));

    dispatcher(openDialog('login','password',{
      action: 'adminChange'
    }));

  }
  handleLogout() {
    dispatcher(adminChange(false));
  }

  render() {

    let BUTTON = [];
    let title = "";

    this.viewType = this.props.location.pathname.replace(/\/([^\/]*)[\w\/]*/,"$1");
    this.noteId = this.props.location.pathname.replace(/\/([^\/]*)\/?(([\w\/]*))?/,"$2");



    switch ( this.viewType ) {
      case 'view':

        title = this.props.viewTitle;

        BUTTON.push(
          <button 
            key='edit'
            onClick={this.handleEditMemo.bind(this)}>EDIT
          </button>
        );

        BUTTON.push(
          <button 
            key='delete' 
            onClick={this.handleDeleteMemo.bind(this)}>DELETE
          </button>
        );
      case '':
        BUTTON.unshift(
          <button 
            key='write'
            onClick={this.handleChangeWritepage.bind(this)}>
            WRITE
          </button>
        );

        break;
      case 'write':
        title = 'write';

        let previewToggle = "PREVIEW";
        if ( this.props.preview ) {
          previewToggle = "LIST";
        }

        BUTTON.push(
          <button 
            key={previewToggle}
            onClick={this.handleShowPreview.bind(this)}>{previewToggle}
          </button>
        );

        BUTTON.push(
          <button 
            key='send' 
            onClick={this.handleWriteMemo.bind(this)}>SAVE
          </button>
        );

        BUTTON.push(
          <button 
            key='cancel' 
            onClick={this.handleWriteCancel.bind(this)}>CANCEL
          </button>
        );
        break;
    }


    if ( !this.props.adminMode ) {
      BUTTON.push(
        <button 
          key='login'
          onClick={this.handleLogin.bind(this)}
        >LOGIN</button>
      );
    } else {
      BUTTON.push(
        <button 
          key='logout' 
          onClick={this.handleLogout.bind(this)}
        >LOGOUT</button>
      );
    }

    return (
      <header>
        <div className="left"> 
          {
            this.props.viewTitle 
            ? " - " + title + " - "
            : "JINW-MEMO"
          }
        </div>
        <div className="right">

          {BUTTON}
        </div>
      </header>
    );
  }
}
/**
 *  REDUX STATE 주입
 */
export default connect(function (state) {
    return {
      viewTitle: state.default.view.title
    };
})(Header);

