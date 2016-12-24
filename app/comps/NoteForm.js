import React, {Component} from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component{

  add(){
    var {dispatch} = this.props;
    var text = this.refs.txt.value
    dispatch({type: 'ADD_ITEM', newItem: text});
    dispatch({type: 'TOGGLE'});
  }
  render(){
    return (
      <div>
        <input type="text" ref="txt"/>
        <button onClick={this.add.bind(this)}>Them</button>
      </div>
    )
  }
}

module.exports = connect()(NoteForm);
