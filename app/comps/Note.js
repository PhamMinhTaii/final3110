import React, {Component} from 'react';
import {connect} from 'react-redux';
import {remove} from 'action';

class Note extends Component{
  remove(){
    var {dispatch, index} = this.props;
    dispatch(remove(index));
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
