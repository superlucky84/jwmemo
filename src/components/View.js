import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import marked from 'marked';

/* IMPORT ACTIONS */
import {getOne} from '../actions/jnote'

export default class View extends Component {

  constructor(props) {
    super(props);

  } 
  componentDidMount() {
    if (this.props.routeParams && this.props.routeParams.id) {
      this.props.dispatch(getOne(this.props.routeParams.id));
    }
  }


  componentWillReceiveProps(nextprops) {
    if (nextprops.routeParams && nextprops.routeParams.id) {
      nextprops.dispatch(getOne(nextprops.routeParams.id));
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

    if ( this.props.viewType == 'preview' ) {

      note = marked(this.props.previewNote.toString(), {sanitize: false});
      classname = 'preview markdown-body';

      if(this.props.realleft){
        let realright = 100 - this.props.realleft;
        splitStyle = {
          right: realright+"%"
        };
      }
    }
    else {

      note = marked(this.props.note.toString(), {sanitize: false});
      classname = 'view markdown-body';

      if (this.props.realleft) {
        splitStyle = {
          left: "calc("+this.props.realleft+"% + 2px)"
        }
      }
    }

    return (
      <div 
        style={splitStyle}
        className={classname} 
        dangerouslySetInnerHTML={{__html: note}} />
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

