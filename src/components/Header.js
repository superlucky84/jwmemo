import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router'

/* IMPORT ACTIONS */
import {writeNote, editNote, deleteNote ,updateForm, togglePreview, openDialog} from '../actions/jnote'

export default class Header extends Component {

  constructor(props) {
    super(props);
    this.noteId = null;
  }

  handleChangeWritepage() {

    this.props.dispatch(updateForm('title',''));
    this.props.dispatch(updateForm('note',''));
    hashHistory.push('/write');

    // Previe 열기
    if ( !this.props.preview ) {
      this.props.dispatch(togglePreview());
    }
  }

  handleEditMemo() {

    this.props.dispatch(updateForm('sync'));
    hashHistory.push('/write/'+this.noteId);

    // Previe 열기
    if ( !this.props.preview ) {
      this.props.dispatch(togglePreview());
    }
  }
  handleWriteCancel() {

    // Previe 닫음
    if ( this.props.preview ) {
      this.props.dispatch(togglePreview());
    }

    if (this.noteId) {
      hashHistory.push('/view/'+this.noteId);
    }
    else {
      hashHistory.push('/');
    }
  }

  handleWriteMemo() {

    // Previe 닫음
    if ( this.props.preview ) {
      this.props.dispatch(togglePreview());
    }

    // 수정
    if (this.noteId) {
      this.props.dispatch(editNote(this.noteId));
      hashHistory.push('/view/'+this.noteId);
    }
    // 생성
    else {
      this.props.dispatch(writeNote());
    }
  }

  handleDeleteMemo() {

    // Previe 닫음
    if ( this.props.preview ) {
      this.props.dispatch(togglePreview());
    }

    // ACTION
    this.props.dispatch(openDialog('confirm','Really?',{
      action: 'deleteNote',
      push: '/'
    }));
  }

  handleShowPreview() {
    this.props.dispatch(togglePreview());
  }

  handleOpenDailog() {
    this.props.dispatch(openDialog('confirm','test'));
  }

  render() {

    let BUTTON = [];

    this.viewType = this.props.location.pathname.replace(/\/([^\/]*)[\w\/]*/,"$1");
    this.noteId = this.props.location.pathname.replace(/\/([^\/]*)\/?(([\w\/]*))?/,"$2");


    switch ( this.viewType ) {
      case 'view':


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
    //BUTTON.push(<button key='login'>LOGIN</button>);
    //BUTTON.push(<button key='signin'>SIGNIN</button>);
    
    if ( !this.props.adminMode ) {
      BUTTON = [];
    }

    return (
      <header>
        <div className="left"> JINWOO </div>
        <div className="right">

          {BUTTON}
        </div>
      </header>
    );

  }
}

