import React, { Component, PropTypes } from 'react';
import { push } from 'react-router-redux'

/* IMPORT ACTIONS */
import {getOne} from '../actions/jnote'

export default class List extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  handleChoickList(id) {
    this.props.dispatch(getOne(id));
    this.props.dispatch(push('/view/'+id));
  }

  render() {

    //const { user, error, params, hostname, env, locale, dialog } = this.props;
    console.log("this.props.lists");
    console.log(this.props.lists);

    return (
      <div className="list">
        <ul>
          {
          this.props.lists.map((item,idx)=>(
            <li key={idx} onClick={this.handleChoickList.bind(this,item._id)} >
              {item.title}
            </li>
          ))
          }
        </ul>
      </div>
    );

  }
}

