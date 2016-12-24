import React, {Component} from 'react';
import Note from 'Note';
import {connect} from 'react-redux';
import NoteForm from 'NoteForm';

class List extends Component{
  add(){
    var {dispatch} = this.props;
    dispatch({type: 'TOGGLE'});
  }
  render(){
    var xhtml = this.props.isAdding?<NoteForm/>:
    <button onClick={this.add.bind(this)}>+</button>
    return (
      <div>
        {xhtml}
        {
          this.props.mang.map((e, i) => {
            return <Note key={i} index={i}>{e}</Note>
          })
        }
      </div>
    )
  }
}

module.exports = connect(
  function(state){
    return state
  }
)(List);
