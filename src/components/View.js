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
    if (this.props.routeParams && this.props.routeParams.id) {
      this.props.dispatch(getOne(this.props.routeParams.id));
    }
  }

  render() {

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

    let note = "";
    let classname = '';

    if ( this.props.viewType == 'preview' ) {
      note = marked(this.props.previewNote.toString(), {sanitize: false});
      classname = 'preview markdown-body';
    }
    else {
      note = marked(this.props.note.toString(), {sanitize: false});
      classname = 'view markdown-body';
    }

    return (
      <div className={classname} dangerouslySetInnerHTML={{__html: note}} />
    );
  }
}

/**
 *  REDUX STATE 주입
 */
export default connect(function (state) {
    return {
      note: state.default.view.note,
      previewNote: state.default.write.note
    };
})(View);

