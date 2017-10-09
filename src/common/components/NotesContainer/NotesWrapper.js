import React from 'react';

import NoteFormContainer from './components/NoteFormContainer';
import NoteList from './components/NoteList';
import './note-wrapper.css';

import notesWrapperProps from './NotesWrapper.props';

const NotesWrapper = props => (
  <div className="NotesContainer-wrapper">
    <NoteFormContainer />
    <button
      type="button"
      className="create-note-button"
      onClick={props.handleCreateNoteNote}
    >
      Create new note
    </button>
    <NoteList
      className="NoteList"
      notes={props.notes}
      onRemoveNote={props.handleRemoveNote}
      onUpdateNote={props.handleUpdateNote}
    />
  </div>
);

NotesWrapper.propTypes = notesWrapperProps;

export default NotesWrapper;
