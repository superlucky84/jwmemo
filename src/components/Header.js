import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux'

/* IMPORT ACTIONS */
import {writeNote, deleteNote} from '../actions/jnote'

export default class Header extends Component {

  constructor(props,children) {
    super(props);
    console.log('header_props');
    console.log(this.props);
  }

  handleChangeWritepage() {
    this.props.dispatch(push('/write'));
  }

  handleWriteMemo() {
    // VALIDATE

    // ACTION
    this.props.dispatch(writeNote());
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

    switch (this.props.location.pathname.replace(/\/([^\/]*)[\w\/]*/,"$1")) {
      case 'view':
        BUTTON.push(
          <button 
            key='markview'
            onClick={this.handleShowMarkview.bind(this)}>Markview
          </button>
        );
        BUTTON.push(
          <button 
            key='edit'>Edit
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
          <div className="title">Record</div>
          <button onClick={this.handleChangeWritepage.bind(this)}>Write</button>
        </div>
        <div className="right">
          {BUTTON}
        </div>
      </header>
    );

  }
}

