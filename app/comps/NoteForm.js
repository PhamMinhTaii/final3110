import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addItem, toggle} from 'action';

class NoteForm extends Component{

  add(){
    var {dispatch} = this.props;
    var text = this.refs.txt.value
    dispatch(addItem(text));
    dispatch(toggle());
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
