import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/* IMPORT ACTIONS */
import {updateForm} from '../actions/jnote'


export default class Write extends Component {

  constructor(props) {
    super(props);
  }

  changeTitle(event) {
    this.props.dispatch(updateForm('title',event.target.value));
  }

  changeNote(event) {
    this.props.dispatch(updateForm('NOTE',event.target.value));
  }

  render() {

    console.log("this.propsJJJJJJJJJJJ");
    console.log(this.props);

    return (
      <div className="write">
        <input type="text" 
          placeholder="Title" 
          onChange={this.changeTitle.bind(this)} 
          value={this.props.writeTitle}
        />
        <textarea 
          placeholder="Memo" 
          onChange={this.changeNote.bind(this)} 
          value={this.props.writeNote}
        />
      </div>
    );
  }
}

/**
 *  REDUX STATE 주입
 */
export default connect(function (state) {
    return {
      writeTitle: state.default.write.title,
      writeNote: state.default.write.note
    };
})(Write);
