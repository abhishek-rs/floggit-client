import React from 'react';
import Note from './components/Note';
import NoteFormContainer from '../NoteFormContainer';
import noteListProps from './NoteList.props';
import './NoteList.css';

const NoteList = props => (
  <ul className="NoteList">
    {
      props.activeForm && !props.noteFormId ?
        <li><NoteFormContainer whiteboardId={props.currentWhiteboardId} /></li> : ''
    }
    {
      props.notes.filter(note => note.display)
        .filter(note => note.whiteboardId === props.currentWhiteboardId)
        .map(note => (
          <li key={note.id}>
            {
              props.activeForm && note.id === props.noteFormId ?
                <NoteFormContainer whiteboardId={props.currentWhiteboardId} /> :
                <Note
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  color={note.color}
                  information={note.information}
                  onRemoveNote={props.onRemoveNote}
                  onUpdateNote={props.onUpdateNote}
                />
            }
          </li>
        ))
    }
  </ul>
);

NoteList.propTypes = noteListProps;

export default NoteList;
