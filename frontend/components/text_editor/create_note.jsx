import React from 'react';
import TextEditor from './text_editor';
import { connect } from 'react-redux';
import { createNote } from '../../actions/notes';

const mapState = state => {
  console.log('mapping');
  return {
    note: {title:'', body:''}
  };
};

const mapDispatch = dispatch => {
  return {
    action: note => dispatch(createNote(note)),
    onMount: ()=>{}
  };
};

export default connect(mapState,mapDispatch)(TextEditor);
