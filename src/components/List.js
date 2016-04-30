import React, { Component, PropTypes } from 'react';
import {  hashHistory } from 'react-router'

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
            <li 
              key={idx} 
              data-idx={idx} 
              onClick={this.handleChoickList.bind(this,item._id)} 
            >
              {idx}. {item.title}
            </li>
          ))
          }
        </ul>
      </div>
    );

  }
}

