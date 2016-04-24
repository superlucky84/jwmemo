import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router'

import Header from './Header'
import Footer from './Footer'
import List from './List'
import View from './View'
import Dialog from './Dialog'


/* IMPORT ACTIONS */
import {getList} from '../actions/jnote'


export default class App extends Component {

  constructor(props,children) {
    super(props);

    this.state = {
      downstate: false,
      shodowleft: null,
      realleft: null
    }

  }

  componentDidMount() {
    /** * 리스트를 가져온다 */
    this.props.dispatch(getList());
  }

  handleMouseDown() {
    console.log('down');
    this.setState({ downstate: true });
  }

  handleMouseUp(e) {

    if (this.state.downstate) {
      let realleft =  Math.round((e.pageX / $('#container').width() ) * 100);
      this.changeShadowLeft(realleft);
    }
  }

  handleMouseLeave() {
    console.log('leave');
    this.setState({ downstate: false });
  }

  handleMouseMove(e) {
    if (this.state.downstate) {
      console.log('move');
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
          <Footer />
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
      dialog: state.default.dialog
    };
})(App);
