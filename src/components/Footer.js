import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router'

/* IMPORT ACTIONS */
import { shortcutChange, adminChange, updateForm, openDialog, editNote, writeNote, togglePreview, getList } from '../actions/jnote'

class Footer extends Component {

  constructor(props) {
    super(props);

    // SHORTCUT EVENT
    this.timeoutState = null;
    this.preKeyCode = null;

    /*
    document.querySelector('body').addEventListener('keydown', (event) => {

      let keyCharCode = event.keyCode || event.charCode;

      // if (event.shiftKey == true && (keyCharCode == 186 || keyCharCode == 59 || keyCharCode == 191) && vim.m_mode == 'COMMAND' && ['TEXTAREA'].indexOf(event.target.tagName) > -1 ) {
      if (event.shiftKey == true && (keyCharCode == 186 || keyCharCode == 59 || keyCharCode == 191)  && ['TEXTAREA'].indexOf(event.target.tagName) > -1 ) {
        event.target.blur();
        setTimeout(() => {
          event.target.focus();
        },900);
      }
      if( keyCharCode==27 && ['INPUT'].indexOf(event.target.tagName) > -1 ) {
        event.target.blur();
      }

       

      //if (this.preKeyCode == event.keyCode && event.keyCode == 16 && ['INPUT','TEXTAREA'].indexOf(event.target.tagName) == -1 ) {
      //  this.preKeyCode = null;

      //  // ACTION
      //  this.props.dispatch(openDialog('search','searchList',{
      //    action: 'getList',
      //    push: '/'
      //  }));
      //}
      //else {
      //  this.preKeyCode = event.keyCode;
      //}
    });
    */

    document.querySelector('body').addEventListener('keypress', (event) => {


      let keyCharCode = event.keyCode || event.charCode;

      if( ['TEXTAREA','INPUT'].indexOf(event.target.tagName) > -1 ) {
        return;
      }
      else {
        event.preventDefault();
      }

      let shortcut = this.props.shortcutBuffer;
      if (this.props.shortcutBuffer == null){
        shortcut = "";
      }

      let matchString = String(shortcut+String.fromCharCode(keyCharCode));
      this.props.dispatch(shortcutChange(matchString));

      let match = null;
      /* 행 찾아가기 */
      if ( match = /([0-9]*)gg$/g.exec(matchString) ) {
        let target = match[1];
        if ( target == '' ) target = 0;
        this.viewTargetTrigger(target);
      }
      /* 행 찾아가기2 */
      else if ( keyCharCode == 13 &&  /^:([0-9]+)\s/g.exec(matchString) ) {
        match = /^:([0-9]+)\s/g.exec(matchString)
        this.viewTargetTrigger(match[1]);
      }
      /* 리스트에서 검색하기 */
      else if ( keyCharCode == 13 && /^[:](s|search|list)\s/g.exec(matchString) ) {
        // ACTION
        this.props.dispatch(openDialog('search','searchList',{
          action: 'getList',
          push: '/'
        }));

      }
      /* 수정하기 */
      else if (keyCharCode == 13 && matchString.match(/:e[ ]?([0-9]*)\s/g) ) {
        match = /:e[ ]?([0-9]*)/g.exec(matchString);
        let target = document.querySelector(`.list li[data-idx='${match[1]}']`);

        if ( !this.props.adminMode ) {
          this.props.dispatch(openDialog('alert','Only admin mode.'));
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
      /* 검색 */
      else if (keyCharCode == 13 && matchString.match(/^\/(.*)\s/g) ) {
        match = /^\/(.*)\s/g.exec(matchString);
        this.props.dispatch(getList(match[1]));
      }

      /* 캔슬 */
      else if (keyCharCode == 13 && matchString.match(/^:q\s/g) ) {
        // Previe 닫음
        if ( this.props.preview ) {
          this.props.dispatch(togglePreview());
        }

        let noteId = this.props.location.pathname.replace(/\/([^\/]*)\/?(([\w\/]*))?/,"$2");
        if (noteId) {
          hashHistory.push('/view/'+noteId);
        }
        else {
          hashHistory.push('/');
        }
      }
      /* 저장하기 나가기 */
      else if (keyCharCode == 13 && matchString.match(/^:w(q?)\s/g) ) {
      //else if (keyCharCode == 13 && match = /^:w(q?)\s/g.exec(matchString) ) {
        match = /^:w(q?)\s/g.exec(matchString);

        let noteId = this.props.location.pathname.replace(/\/([^\/]*)\/?(([\w\/]*))?/,"$2");
        if ('write' == this.props.location.pathname.replace(/\/([^\/]*)[\w\/]*/,"$1")) {

          //if ( !this.props.adminMode ) {
            //this.props.dispatch(openDialog('alert','Not AdminMode'));
          //}
          //else {

              // 수정
              if (noteId) {
                this.props.dispatch(editNote(noteId));
                if (match[1] == 'q') {

                  if ( this.props.preview ) {
                    this.props.dispatch(togglePreview());
                  }

                  hashHistory.push('/view/'+noteId);
                }
              }
              // 생성
              else {
                this.props.dispatch(writeNote());
                setTimeout(() => {

                  if ( this.props.preview ) {
                    this.props.dispatch(togglePreview());
                  }
                  this.viewTargetTrigger(0);
                  if (match[1] != 'q') {
                    this.props.dispatch(updateForm('sync'));
                    //let noteId = this.props.location.pathname.replace(/\/([^\/]*)\/?(([\w\/]*))?/,"$2");
                    hashHistory.push('/write/'+this.props.params.id);
                    document.querySelector('textarea').focus();
                    this.props.dispatch(togglePreview());
                  }
                },1000);
              }
          //}
        }
      }
      /* 화면분할 균등 */
      else if ( matchString.match(/=/g) ) {
        this.props.changeShadowLeft(50);
      }
      else if ( match = /([0-9]+)([<>])$/g.exec(matchString) ) {

        let changeLeft = this.props.realleft;
        if (match[2] == ">") {
          changeLeft = this.props.realleft + parseInt(match[1]);
        }
        else if (match[2] == "<") {
          changeLeft = this.props.realleft - parseInt(match[1]);
        }

        if (changeLeft <= 0) { changeLeft = 1; }
        else if (changeLeft >= 100) { changeLeft = 99; }

        this.props.changeShadowLeft(changeLeft);
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
          this.props.changeShadowLeft(parseInt(match[1]));
        }

        this.props.dispatch(shortcutChange(''));
        this.timeoutState = null;
        /*
        if (document.querySelector('textarea')) {
          document.querySelector('textarea').focus();
        }
        */
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

  render() {

    let shortcut = String(this.props.shortcutBuffer).replace(//g,'^W');
    let privateChar = /(.*)\?(.*)/g.exec(shortcut);
    if (privateChar) {
      shortcut = `${privateChar[1]}?${privateChar[2].replace(/./g,"*")}`;
    }


    return (
      <footer>
        {
          ( this.props.shortcutBuffer )
          ? <div id="command-display" className="left">{shortcut}</div>
          : null
        }

        <div className="right">
          &copy;2016 SUPERLUCKY inc
        </div>
      </footer>
    );

  }
}


/**
 *  REDUX STATE 주입
 */
export default connect(function (state) {
    return {
      shortcutBuffer: state.default.shortcut.buffer
    };
})(Footer);
