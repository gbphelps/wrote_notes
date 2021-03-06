import React from 'react';
import TextEditor from './text_editor';
import { connect } from 'react-redux';
import { updateNote, fetchNote } from '../../actions/notes';
import { createTagging, deleteTagging } from '../../actions/taggings';




const mapState = (state, ownProps) => {
  const note = state.entities.notes[ownProps.match.params.noteId];
  return {
    note,
    taggings: state.entities.taggings,
    images: state.entities.embeds,
    formType: 'Edit',
  };
};

const mapDispatch = (dispatch,ownProps) => {
  return {
    fetchNote: id => dispatch(fetchNote(id)),
    action: note => dispatch(updateNote(note)),
    deleteTagging: tagging => dispatch(deleteTagging(tagging)),
    createTagging: tagging => dispatch(createTagging(tagging)),
  };
};

export default connect(mapState,mapDispatch)(TextEditor);
