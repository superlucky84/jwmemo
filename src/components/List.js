import React, { Component, PropTypes } from 'react';
import {  hashHistory } from 'react-router';

import ListItem from './ListItem';

/* IMPORT ACTIONS */
import {getOne} from '../actions/jnote'

export default class List extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  handleChoickList(id) {
    hashHistory.push('/view/'+id);
  }

  render() {


    let splitStyle = null;
    if(this.props.realleft){
      let realright = 100 - this.props.realleft;
      splitStyle = {
        right: realright+"%"
      };
    }

    return (
      <div className="list" style={splitStyle}>
        <ul>
          {
          this.props.lists.map((item,idx)=>(
            <ListItem 
              key={idx} 
              idx={idx}
              id={item._id}
              title={item.title}
            />
          ))
          }
        </ul>
      </div>
    );
  }
}

