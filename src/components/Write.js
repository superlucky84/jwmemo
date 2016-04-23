import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/* IMPORT ACTIONS */
import {updateForm, getOne} from '../actions/jnote'


export default class Write extends Component {

  constructor(props) {
    super(props);
  }

  changeTitle(event) {
    this.props.dispatch(updateForm('title',event.target.value));
  }

  changeNote(event) {
    this.props.dispatch(updateForm('note',event.target.value));
  }

  componentDidMount() {
    if (this.props.routeParams.id) {
      this.props.dispatch(getOne(this.props.routeParams.id));
      this.props.dispatch(updateForm('sync'));
    }
  }

  render() {

    let splitStyle = null;
    if (this.props.realleft) {
      splitStyle = {
        left: "calc("+this.props.realleft+"% + 2px)"
      }
    }

    return (
      <div className="write" style={splitStyle}>
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
