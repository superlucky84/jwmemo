import React, { Component, PropTypes } from 'react';
import {  hashHistory } from 'react-router'

import TagItem from './TagItem';

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


    console.log(this.props.tags)


    return (
        <li
          data-idx={this.props.idx}
          onClick={this.handleChoickList.bind(this,this.props.id)} 
        >
          <div>
            {
            this.props.tags.map((item,idx)=>(
              <TagItem 
                 key={idx}
                 tag={item}
              />
            ))
            }
          </div>
          <div className="title">
            {this.props.idx}. {this.props.title}
          </div>

        </li>
    );

  }
}

