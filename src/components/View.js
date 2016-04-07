import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

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

    /*
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
    */

    const note = marked(this.props.note.toString().replace(/\n/gi,"<br>"), {sanitize: false});
    //const note = marked(this.props.note);

    return (
      <div className="view" dangerouslySetInnerHTML={{__html: note}} />
    );
  }
}

/**
 *  REDUX STATE 주입
 */
export default connect(function (state) {
    return {
      note: state.default.view.note
    };
})(View);

