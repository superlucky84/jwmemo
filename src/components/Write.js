import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux';

/* IMPORT ACTIONS */
import {updateForm, getOne, scrollChange} from '../actions/jnote'


class Write extends Component {

  constructor(props) {
    super(props);
    this.scrollPercent = 0;
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
    let lastFalg = false;
    if (this.props.writeNote.slice(-2) != event.target.value.slice(-2)) {
      lastFalg = true;
    }

    this.props.dispatch(updateForm('note',event.target.value));

    if (lastFalg) {
      this.props.dispatch(scrollChange(100));
    }

  }
  changeScroll(event) {
    let percent =  (event.target.scrollTop / (event.target.scrollHeight - event.target.clientHeight)) * 100;
    percent = Math.round(percent);
    this.scrollPercent = percent;
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

    if (vim) {
      vim.on_log = function(log) {
        if (log.match(/(^act_paste|^delete)/) ) {
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

  }

  dragEnter(event) {
    event.preventDefault();                    
  }
  onDrop(event) {
    let self = this;
    let value_target = event.target;
    let file = event.dataTransfer.files[0];      
    let formdata = new FormData();
    formdata.append("pict", file);
    let xhr = new XMLHttpRequest();

    xhr.open("POST", "/jnote/upload");  
    xhr.send(formdata);
    xhr.onreadystatechange = function(){    
      if(xhr.readyState == 4){      
         if(xhr.status >= 200 && xhr.status < 300){
           var result = JSON.parse(xhr.responseText);
           var img = "\n![]("+String(result.filepath)+")\n";
           value_target.value = value_target.value+img;
           self.props.dispatch(updateForm('note',value_target.value));
         }
      } 
    }

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
