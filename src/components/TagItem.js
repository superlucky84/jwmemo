import React, { Component, PropTypes } from 'react';
import {  hashHistory } from 'react-router'


export default class TagItem extends Component {

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
        <span className="tag">
          {this.props.tag}
        </span>
    );

  }
}

