import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router'

import Header from './Header'
import Footer from './Footer'
import List from './List'
import View from './View'


/* IMPORT ACTIONS */
import {getList} from '../actions/jnote'


export default class App extends Component {

  constructor(props,children) {
    super(props);
    console.log('CHILDREN');
    console.log(this.props);

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
    console.log('up');
    if (this.state.downstate) {
      console.log('E: ',e);

      console.log( document.getElementById('container') );

      this.setState({ 
        downstate: false,
        realleft: { left: e.pageX }
      });
    }
  }

  handleMouseLeave() {
    console.log('leave');
    this.setState({ downstate: false });
  }

  handleMouseMove(e) {
    console.log('move');
    if (this.state.downstate) {
      this.setState({
        shodowleft: { left: e.pageX }
      });
    }
  }

  render() {

    //const { user, error, params, hostname, env, locale, dialog } = this.props;
    //<Link to="/view">View</Link>
    //<Link to="/">Home</Link>

    let SPLITSHADOW =  null;
    if (this.state.downstate) {
      SPLITSHADOW = <div className="split-shadow" style={this.state.shodowleft}></div>;
    }

    return (
        <div id="app-container">
          <Header 
            dispatch={this.props.dispatch} 
            location={this.props.location} 
            preview={this.props.preview}
          />
          <div id="container"
            //onMouseMove={this.handleMouseMove.bind(this,event)}
            //onMouseUp={this.handleMouseUp.bind(this,event)}
            //onMouseLeave={this.handleMouseLeave.bind(this)}
          >
            {
              ( this.props.preview )
              ? <View viewType="preview" />
              : <List {...this.props} />
            }
            <div 
              onMouseDown={this.handleMouseDown.bind(this)} 
              className="split"
              style={this.state.realleft}
            >
            </div>
            {SPLITSHADOW}
            {this.props.children}
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
      preview: state.default.preview.opened
    };
})(App);
