import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';

/* IMPORT ACTIONS */
import {updateForm, getOne, scrollChange} from '../actions/jnote'


export default class Write extends Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextprops) {
    if (nextprops.writeScroll != this.props.writeScroll) {
      let $this = ReactDOM.findDOMNode(this.refs.textarea);
      let result = (($this.scrollHeight - $this.clientHeight) * nextprops.writeScroll) / 100;
      $this.scrollTop = result;
    }
  }

  changeTitle(event) {
    this.props.dispatch(updateForm('title',event.target.value));
  }

  changeNote(event) {
    this.props.dispatch(updateForm('note',event.target.value));
  }
  changeScroll(event) {

    let percent =  (event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight)) * 100;
    percent = Math.round(percent);
    this.props.dispatch(scrollChange(percent));
  }

  changeTag(event) {

    let tagsString = event.target.value
                      .replace(/[^a-z0-9,;:]*/g,"")
                      .replace(/[,;:]/g,",")
                      .replace(/,+/g,",")
                      .replace(/^,/g,"");

    let tags = tagsString.split(",");
    if (tagsString.match(/,$/) ) {
      let newTag = [];
      tags.forEach((tag)=>{
        if ( newTag.indexOf(tag) == -1 ) {
          newTag.push(tag);
        }
      });
      tags = newTag;
    }

    this.props.dispatch(updateForm('tags',tags));
  }

  componentDidMount() {
    if (this.props.routeParams.id) {
      this.props.dispatch(getOne(this.props.routeParams.id));
      this.props.dispatch(updateForm('sync'));
    }

    let target = ReactDOM.findDOMNode(this.refs.textarea);

    vim.on_log = function(log) {
      if (log == 'delete range') {
        this.props.dispatch(updateForm('note',event.target.value));
      }
      if (log == 'set_mode INSERT') {
        target.className = "insert";
      }
      else if (log == 'set_mode COMMAND') {
        target.className = "";
      }
    }.bind(this);

    if (target !== null) {
      vim.attach_to( target );
      target.focus();
    }
  }

  dragEnter(event) {
    event.preventDefault();                    
  }
  onDrop(event) {

    let file = event.dataTransfer.files[0];      
    console.log("FILE",file);
    

    event.stopPropagation();
    event.preventDefault(); 
  }

  render() {

    // TAG 세팅
    let writeTags = this.props.writeTags.join(", ").replace(/[ ]*$/,"");

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
        <input type="text" 
          placeholder="Tag"
          onChange={this.changeTag.bind(this)}
          value={writeTags}
        />
        <textarea 
          ref="textarea"
          placeholder="Memo" 
          onDragEnter={this.dragEnter.bind(this)}
          onDragOver={this.dragEnter.bind(this)}
          onDrop={this.onDrop.bind(this)}
          onChange={this.changeNote.bind(this)} 
          onScroll={this.changeScroll.bind(this)}
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
      writeNote: state.default.write.note,
      writeTags: state.default.write.tags,
      writeScroll: state.default.write.scroll
    };
})(Write);
