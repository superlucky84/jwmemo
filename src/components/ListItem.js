import React, { Component, PropTypes } from 'react';
import {  hashHistory } from 'react-router'

/* IMPORT ACTIONS */
import {getOne} from '../actions/jnote'

export default class ListItem extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }


  handleChoickList(id) {
    hashHistory.push('/view/'+id);
  }

  render() {



    return (
        <li
          data-idx={this.props.idx}
          onClick={this.handleChoickList.bind(this,this.props.id)} 
        >
          {this.props.idx}. {this.props.title}

        </li>
    );

  }
}

