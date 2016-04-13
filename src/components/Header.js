import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux'

/* IMPORT ACTIONS */
import {writeNote, editNote, deleteNote ,updateForm} from '../actions/jnote'

export default class Header extends Component {

  constructor(props,children) {
    super(props);
    console.log('header_props');
    console.log(this.props);
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

  handleWriteMemo() {
    // VALIDATE


    // 수정
    if (this.noteId) {
      console.log('EDIT',this.noteId);
      this.props.dispatch(editNote(this.noteId));
      this.props.dispatch(push('/view/'+this.noteId));
    }
    // 생성
    else {
      console.log('CREATER');
      this.props.dispatch(writeNote());
    }

  }

  handleDeleteMemo() {

    // ACTION
    this.props.dispatch(deleteNote());
    this.props.dispatch(push('/'));
  }


  handleShowMarkview() {
    console.log('handleShowMarkview');
  }

  render() {

    let BUTTON = [];

    this.viewType = this.props.location.pathname.replace(/\/([^\/]*)[\w\/]*/,"$1");
    this.noteId = this.props.location.pathname.replace(/\/([^\/]*)\/?(([\w\/]*))?/,"$2");

    switch ( this.viewType ) {
      case 'view':

        BUTTON.push(
          <button 
            key='markview'
            onClick={this.handleShowMarkview.bind(this)}>Markview
          </button>
        );
        BUTTON.push(
          <button 
            key='edit'
            onClick={this.handleEditMemo.bind(this)}>Edit
          </button>
        );
        BUTTON.push(
          <button 
            key='delete' 
            onClick={this.handleDeleteMemo.bind(this)}>Delete
          </button>
        );
        break;
      case 'write':


        BUTTON.push(
          <button 
            key='send' 
            onClick={this.handleWriteMemo.bind(this)}>Send
          </button>
        );
        break;
    }
    //BUTTON.push(<button key='login'>LOGIN</button>);
    //BUTTON.push(<button key='signin'>SIGNIN</button>);
    

    return (
      <header>
        <div className="left">
          <button 
            onClick={this.handleChangeWritepage.bind(this)}>
            Write
          </button>
        </div>
        <div className="right">
          {BUTTON}
        </div>
      </header>
    );

  }
}

