import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import dispatcher from '../dispatcher.js';
import { connect } from 'react-redux';
import marked from 'marked';


/* IMPORT ACTIONS */
import {getOne} from '../actions/jnote';

class ViewNote extends Component {

  constructor(props) {
    super(props);
  } 

  componentDidMount() {
    if (this.props.routeParams && this.props.routeParams.id) {
      dispatcher(getOne(this.props.routeParams.id));
    }
  }


  componentWillReceiveProps(nextprops) {
    if (nextprops.routeParams && (nextprops.routeParams.id != this.props.params.id)) {

      dispatcher(getOne(nextprops.routeParams.id));
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
    let splitStyle = null;
    let scroll = 0;

    if ( this.props.viewType == 'preview' ) {
      note = marked(this.props.previewNote.toString(), {sanitize: false});
    }
    else {
      note = marked(this.props.note.toString(), {sanitize: false});
    }

    return (
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{__html: note}}
      />

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
})(ViewNote);
