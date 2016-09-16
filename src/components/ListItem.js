import React, { Component, PropTypes } from 'react';
import {  hashHistory } from 'react-router'

import TagItem from './TagItem';

/* IMPORT ACTIONS */
import {toggleFavorite} from '../actions/jnote'

export default class ListItem extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  handleChoickList(id) {
    hashHistory.push('/view/'+id);
  }

  handleChangeFav(id, idx,e) {

    this.props.dispatch(toggleFavorite(id, idx));

    e.stopPropagation();
  }

  render() {

    return (
        <li
          data-idx={this.props.idx}
          className={(this.props.favorite)?'fav':''}
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
            <span
              onClick={this.handleChangeFav.bind(this,this.props.id,this.props.idx)}
            />
          </div>

        </li>
    );

  }
}

