import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router'

import Header from './Header'
import Footer from './Footer'
import List from './List'


/* IMPORT ACTIONS */
import {getList} from '../actions/jnote'


export default class App extends Component {

  constructor(props,children) {
    super(props);
    console.log('CHILDREN');
    console.log(this.props);
  }

  componentDidMount() {
    /** * 리스트를 가져온다 */
    this.props.dispatch(getList());
  }
  render() {

    //const { user, error, params, hostname, env, locale, dialog } = this.props;
    //<Link to="/view">View</Link>
    //<Link to="/">Home</Link>

    console.log('this.props');
    console.log(this.props);

    return (
        <div id="app-container">
          <Header />
          <div id="container">
            <List {...this.props} />
            <div className="split"></div>
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
      lists: state.default.lists
    };
})(App);
