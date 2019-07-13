import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Scroll from './juc/Scroll';
import ViewNote from './ViewNote';

/* IMPORT ACTIONS */
import {getOne, scrollChange} from '../actions/jnote';

export default class View extends Component {

  constructor(props) {
    super(props);

  } 

  componentDidMount() {
  }


  render() {

    let splitStyle = null;
    let classname = '';
    let scroll = 0;

    if ( this.props.viewType == 'preview' ) {


      if(this.props.realleft){
        let realright = 100 - this.props.realleft;
        splitStyle = {
          right: `calc(${realright}% + 5px)`
        };

        classname = 'preview';
      }
    }
    else {

      if (this.props.realleft) {
        splitStyle = {
          left: "calc("+this.props.realleft+"% + 7px)"
        };

        classname = 'view';
      }
    }

    return (
      <div 
        style={splitStyle}
        className={classname} >
        <Scroll
          viewType={this.props.viewType}
          realleft={this.props.realleft}
        >
          <ViewNote {...this.props} />
        </Scroll>
      </div>
    );
  }
}

