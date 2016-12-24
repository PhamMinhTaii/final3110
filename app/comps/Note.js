import React, {Component} from 'react';
import {connect} from 'react-redux';

class Note extends Component{

  remove(){
    var {dispatch, index} = this.props;
    dispatch({type: 'REMOVE_ITEM', index: index});
  }
  render(){
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.remove.bind(this)}>Xoa</button>
      </div>
    )
  }
}

module.exports = connect()(Note);
