import React, { Component, PropTypes } from 'react';
import { hashHistory } from 'react-router'
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router'

import Header from './Header'
import Footer from './Footer'
import List from './List'
import View from './View'
import Dialog from './Dialog'


/* IMPORT ACTIONS */
import {getList, shortcutChange, adminChange, updateForm, openDialog, editNote, writeNote, togglePreview} from '../actions/jnote'


export default class App extends Component {

  constructor(props,children) {
    super(props);


    this.state = {
      downstate: false,
      shodowleft: null,
      realleft: 30
    }

    // SHORTCUT EVENT
    this.timeoutState = null;


    document.querySelector('body').addEventListener('keyup', (event) => {
      if( event.keyCode==27 && ['TEXTAREA','INPUT'].indexOf(event.target.tagName) > -1 ) {
        event.target.blur();
      }
    });

    document.querySelector('body').addEventListener('keypress', (event) => {

      if( ['TEXTAREA','INPUT'].indexOf(event.target.tagName) > -1 ) {
        return;
      }

      let shortcut = this.props.shortcutBuffer;
      if (this.props.shortcutBuffer == null){
        shortcut = "";
      }

      let matchString = String(shortcut+String.fromCharCode(event.keyCode));
      this.props.dispatch(shortcutChange(matchString));

      let match = null;
      /* 행 찾아가기 */
      if ( match = /([0-9]*)gg$/g.exec(matchString) ) {
        let target = match[1];
        if ( target == '' ) target = 0;
        this.viewTargetTrigger(target);
      }
      /* 행 찾아가기2 */
      else if ( event.keyCode == 13 &&  /^:([0-9]+)\s/g.exec(matchString) ) {
        match = /^:([0-9]+)\s/g.exec(matchString)
        this.viewTargetTrigger(match[1]);
      }

      /* 수정하기 */
      else if (event.keyCode == 13 && matchString.match(/:e[ ]?([0-9]*)\s/g) ) {
        match = /:e[ ]?([0-9]*)/g.exec(matchString);
        let target = document.querySelector(`.list li[data-idx='${match[1]}']`);

        if ( !this.props.adminMode ) {
          this.props.dispatch(openDialog('alert','Not AdminMode'));
        }
        else if (match[1] == '') {
          this.props.dispatch(updateForm('sync'));
          hashHistory.push('/write/'+this.props.params.id);
          document.querySelector('textarea').focus();

          // Previe 열기
          if ( !this.props.preview ) {
            this.props.dispatch(togglePreview());
          }

        }
        else if (!target) {
          this.props.dispatch(openDialog('alert','Not Found Idx'));
        }
        else {
          target.click();
          this.props.dispatch(updateForm('sync'));
          hashHistory.push('/write/'+this.props.params.id);
          document.querySelector('textarea').focus();

          // Previe 열기
          if ( !this.props.preview ) {
            this.props.dispatch(togglePreview());
          }

        }
      }

      /* 저장하기 */
      else if (event.keyCode == 13 && matchString.match(/^:w\s/g) ) {


        let noteId = this.props.location.pathname.replace(/\/([^\/]*)\/?(([\w\/]*))?/,"$2");
        if ('write' == this.props.location.pathname.replace(/\/([^\/]*)[\w\/]*/,"$1")) {

          //if ( !this.props.adminMode ) {
            //this.props.dispatch(openDialog('alert','Not AdminMode'));
          //}
          //else {
              if ( this.props.preview ) {
                this.props.dispatch(togglePreview());
              }

              // 수정
              if (noteId) {
                this.props.dispatch(editNote(noteId));
                hashHistory.push('/view/'+noteId);
              }
              // 생성
              else {
                this.props.dispatch(writeNote());
              }
          //}
        }
      }
      /* 화면분할 균등 */
      else if ( matchString.match(/=/g) ) {
        this.changeShadowLeft(50);
      }
      else if ( match = /([0-9]+)([<>])$/g.exec(matchString) ) {

        let changeLeft = this.state.realleft;
        if (match[2] == ">") {
          changeLeft = this.state.realleft + parseInt(match[1]);
        }
        else if (match[2] == "<") {
          changeLeft = this.state.realleft - parseInt(match[1]);
        }

        if (changeLeft <= 0) { changeLeft = 1; }
        else if (changeLeft >= 100) { changeLeft = 99; }

        this.changeShadowLeft(changeLeft);
      }
      /* 관리자 권한으로 실행 */
      else if ( match = /^\?dufma (on|off|write|edit)/g.exec(matchString) ) {

        switch(match[1]) {
          case 'on':
          case 'off':
            this.props.dispatch(adminChange((match[1]=='on')?true:false));
            break;
          case 'write':
            this.props.dispatch(updateForm('title',''));
            this.props.dispatch(updateForm('note',''));
            hashHistory.push('/write');
            document.querySelector('input').focus();

            // Previe 열기
            if ( !this.props.preview ) {
              this.props.dispatch(togglePreview());
            }

            break;
          case 'edit':
            if (!this.props.params.id) {
              this.props.dispatch(openDialog('alert','Please specify the target first.'));
              return;
            }
            this.props.dispatch(updateForm('sync'));
            hashHistory.push('/write/'+this.props.params.id);
            document.querySelector('textarea').focus();

            // Previe 열기
            if ( !this.props.preview ) {
              this.props.dispatch(togglePreview());
            }

            break;
        }
      }


      clearTimeout(this.timeoutState);
      this.timeoutState = setTimeout(() => {

        let match = null;
        if ( match = /([0-9]+)$/g.exec(matchString) ) {
          this.changeShadowLeft(parseInt(match[1]));
        }

        this.props.dispatch(shortcutChange(''));
        this.timeoutState = null;
      },900);

    });

  }

  viewTargetTrigger(idx) {
    let target = document.querySelector(`.list li[data-idx='${idx}']`);
    if (!target) {
      this.props.dispatch(openDialog('alert','Not Found Idx'));
    }
    else {
      target.click();
    }
  }

  componentDidMount() {
    /** * 리스트를 가져온다 */
    this.props.dispatch(getList());
  }

  handleMouseDown() {
    this.setState({ downstate: true });
  }

  handleMouseUp(e) {

    if (this.state.downstate) {
      let realleft =  Math.round((e.pageX / $('#container').width() ) * 100);
      this.changeShadowLeft(realleft);
    }
  }

  handleMouseLeave() {
    this.setState({ downstate: false });
  }

  handleMouseMove(e) {
    if (this.state.downstate) {
      this.setState({
        shadowleft: { left: e.pageX }
      });
    }
  }
  changeShadowLeft(realleft) {
    this.setState({ 
      downstate: false,
      realleft
    });
  }

  render() {

    //const { user, error, params, hostname, env, locale, dialog } = this.props;
    //<Link to="/view">View</Link>
    //<Link to="/">Home</Link>


    let realleft = this.state.realleft;
    let splitStyle = {
      left: realleft+"%"
    };

    let SPLITSHADOW =  null;
    if (this.state.downstate) {
      SPLITSHADOW = <div className="split-shadow" style={this.state.shadowleft}></div>;
    }

    let CHILDREN = React.cloneElement(this.props.children, {
      realleft
    });

    let DIALOG = null;
    if ( this.props.dialog.opened ) {
      DIALOG = <Dialog {...this.props} />;
    }

    return (
        <div id="app-container">
          <Header 
            dispatch={this.props.dispatch} 
            location={this.props.location} 
            preview={this.props.preview}
            adminMode={this.props.adminMode}
          />
          <div id="container"
            onMouseMove={this.handleMouseMove.bind(this,event)}
            onMouseUp={this.handleMouseUp.bind(this,event)}
            onMouseLeave={this.handleMouseLeave.bind(this)}
          >
            {DIALOG}
            {
              ( this.props.preview )
              ? <View viewType="preview" realleft={this.state.realleft} />
              : <List {...this.props} realleft={this.state.realleft} />
            }
            <div 
              onMouseDown={this.handleMouseDown.bind(this)} 
              className="split"
              style={splitStyle}
            >
            </div>
            {SPLITSHADOW}
            {CHILDREN}
          </div>
          <Footer shortcut={this.props.shortcutBuffer} />
        </div>
    );

  }
}

/**
 *  REDUX STATE 주입
 */
export default connect(function (state) {
    return {
      lists: state.default.lists,
      preview: state.default.preview.opened,
      dialog: state.default.dialog,
      shortcutBuffer: state.default.shortcut.buffer,
      adminMode: state.default.shortcut.admin
    };
})(App);
