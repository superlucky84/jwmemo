import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import dispatcher from '../dispatcher.js';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router';

/* IMPORT ACTIONS */
import {updateForm, getOne, scrollChange, togglePreview, editNote, writeNote} from '../actions/jnote';


class Write extends Component {

  constructor(props) {
    super(props);
    this.scrollPercent = 0;
    this.editor = null;
  }

  componentWillReceiveProps(nextprops) {
    if (!this.props.writeNote) {
      this.editor.setValue(nextprops.writeNote);
    }

    if (nextprops.writeScroll != this.props.writeScroll) {
      let $this = ReactDOM.findDOMNode(this.refs.textarea);
      let result = (($this.scrollHeight - $this.clientHeight) * nextprops.writeScroll) / 100;
      $this.scrollTop = result;
    }
  }

  componentDidUpdate (nextprops) {
  }

  changeTitle(event) {
    dispatcher(updateForm('title', event.target.value));
  }

  changeNote() {
    let target = ReactDOM.findDOMNode(this.refs.textarea);
    let lastFalg = false;
    if (this.props.writeNote.slice(-2) != target.value.slice(-2)) {
      lastFalg = true;
    }

    dispatcher(updateForm('note', target.value))

    if (lastFalg) {
      dispatcher(scrollChange(100));
    }

  }
  changeScroll(eventTarget) {
    let percent =  (eventTarget.scrollTop / (eventTarget.scrollHeight - eventTarget.clientHeight)) * 100;
    percent = Math.round(percent);
    this.scrollPercent = percent;
    dispatcher(scrollChange(percent));
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

    dispatcher(updateForm('tags',tags));
  }

  componentDidMount() {
    if (this.props.routeParams.id) {
      dispatcher(getOne(this.props.routeParams.id));
      dispatcher(updateForm('sync'));
    }

    let target = ReactDOM.findDOMNode(this.refs.textarea);

    CodeMirror.Vim.jwmode = 'normal';
    this.editor = CodeMirror.fromTextArea(target, {
      lineNumbers: true,
      keyMap: "vim",
      lineWrapping: true
    });

    CodeMirror.on(this.editor, 'vim-command-done', info => {
      setTimeout(() => {
        this.editor.save();
        this.changeNote();
      });
    });

    CodeMirror.on(this.editor, 'vim-mode-change', function(info) {
      CodeMirror.Vim.jwmode = info.mode;
    });

    CodeMirror.on(this.editor, 'scroll', info => {
      this.changeScroll(info.display.scrollbars.vert);
    });

    this.editor.display.lineDiv.addEventListener('dragenter', this.dragEnter.bind(this));
    this.editor.display.lineDiv.addEventListener('dragover', this.dragEnter.bind(this));
    this.editor.display.lineDiv.addEventListener('drop', this.onDrop.bind(this));
    this.editor.focus();
  }

  dragEnter(event) {
    event.preventDefault();                    
  }
  onDrop(event) {
    let self = this;
    let value_target = this.refs.textarea;
    let file = event.dataTransfer.files[0];      
    let formdata = new FormData();
    let xhr = new XMLHttpRequest();

    formdata.append("pict", file);

    xhr.open("POST", "/jnote/upload");  
    xhr.send(formdata);
    xhr.onreadystatechange = function(){    
      if(xhr.readyState == 4){      
         if(xhr.status >= 200 && xhr.status < 300){
           var result = JSON.parse(xhr.responseText);
           var img = "\n![]("+String(result.filepath)+")\n";
           value_target.value = value_target.value + img;

           self.editor.setValue(value_target.value);
           self.editor.save();
           self.changeNote();
         }
      } 
    };

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
      };
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
    writeNote: state.default.write.note,
    writeTags: state.default.write.tags,
    writeScroll: state.default.write.scroll
  };
})(Write);
