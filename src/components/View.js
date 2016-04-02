import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

/* IMPORT ACTIONS */
import {getOne} from '../actions/jnote'

export default class View extends Component {

  constructor(props) {
    super(props);

    console.log('a');
  }

  componentDidMount() {
    this.props.dispatch(getOne(this.props.routeParams.id));
  }

  render() {
    return (
      <div className="view">{this.props.note}</div>
    );
  }
}

/**
 *  REDUX STATE 주입
 */
export default connect(function (state) {
    return {
      note: state.default.note
    };
})(View);

