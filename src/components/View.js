import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';
import marked from 'marked';

/* IMPORT ACTIONS */
import {getOne, scrollChange} from '../actions/jnote'

class View extends Component {

  constructor(props) {
    super(props);

  } 
  componentDidMount() {
    if (this.props.routeParams && this.props.routeParams.id) {
      this.props.dispatch(getOne(this.props.routeParams.id));
    }
  }


  componentWillReceiveProps(nextprops) {
    if (nextprops.routeParams && (nextprops.routeParams.id != this.props.params.id)) {
      nextprops.dispatch(getOne(nextprops.routeParams.id));
    }

    //if (nextprops.previewScroll != this.props.previewScroll) {
      let $this = ReactDOM.findDOMNode(this);
      let result = (($this.scrollHeight - $this.clientHeight) * nextprops.previewScroll) / 100;
      ReactDOM.findDOMNode(this).scrollTop = result;
    //}
  }

  /*
  changeScroll(event) {
    let percent =  (event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight)) * 100;
    percent = Math.round(percent);
    this.props.dispatch(scrollChange(percent));
  }
  */


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
          left: "calc("+this.props.realleft+"% + 7px)"
        }
      }
    }

    return (
      <div 
        style={splitStyle}
        className={classname} 
        //onScroll={this.changeScroll.bind(this)}
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
      previewNote: state.default.write.note,
      previewScroll: state.default.write.scroll
    };
})(View);
