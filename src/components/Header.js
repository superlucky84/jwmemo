import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux';

/* IMPORT ACTIONS */
import {writeNote, editNote, deleteNote ,updateForm, togglePreview, openDialog} from '../actions/jnote'

export default class Header extends Component {

  constructor(props) {
    super(props);
    console.log('header_props');
    this.noteId = null;
  }

  handleChangeWritepage() {

    this.props.dispatch(updateForm('title',''));
    this.props.dispatch(updateForm('note',''));
    this.props.dispatch(push('/write'));
  }

  handleEditMemo() {
    console.log("this.props.routeParams");

    this.props.dispatch(updateForm('sync'));
    this.props.dispatch(push('/write/'+this.noteId));
  }
  handleWriteCancel() {

    // Previe 닫음
    if ( this.props.preview ) {
      this.props.dispatch(togglePreview());
    }

    if (this.noteId) {
      this.props.dispatch(push('/view/'+this.noteId));
    }
    else {
      this.props.dispatch(push('/'));
    }
  }

  handleWriteMemo() {

    // Previe 닫음
    if ( this.props.preview ) {
      this.props.dispatch(togglePreview());
    }

    // 수정
    if (this.noteId) {
      console.log('EDIT',this.noteId);
      this.props.dispatch(editNote(this.noteId));
      this.props.dispatch(push('/view/'+this.noteId));
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
    console.log('handleShowPreview');
    this.props.dispatch(togglePreview());
  }

  handleOpenDailog() {
    console.log('dialog');
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

