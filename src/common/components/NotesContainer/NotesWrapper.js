import React from 'react';
import NoteList from './components/NoteList';
import './NotesWrapper.css';
import notesWrapperProps from './NotesWrapper.props';

const NotesWrapper = (props) => {
  let textInput;
  let clearButton;

  const handleFilter = (event) => {
    const query = event.target.value;
    if (query.length > 0) {
      clearButton.classList.add('visible');
    } else {
      clearButton.classList.remove('visible');
    }
    props.handleFilter(query);
  };

  const clearSearchField = () => {
    textInput.value = '';
    clearButton.classList.remove('visible');
    props.handleFilter('');
  };

  const renderSearchMessage = (notes, whiteboardId) => {
    const notDisplayed = notes.filter(note => !note.display);
    const displayed = notes.filter(note => note.display)
      .filter(note => note.whiteboardId === whiteboardId);

    return notDisplayed.length > 0 ? (
      <div className="search-message">
    Search matched
        <strong>{displayed.length}</strong>
    of
        <strong>{notes.filter(note => note.whiteboardId === whiteboardId).length}</strong>
    notes
      </div>) : '';
  };

  return (
    <div className="NotesContainer-wrapper">
      <div className="NotesContainer-toolbar">
        <button
          type="button"
          disabled={props.notesLoading}
          className="create-note-button"
          onClick={props.handleCreateNoteNote}
        >
        Create new note
        </button>

        <div className="InputContainer">
          <input
            type="text"
            placeholder="Search"
            className="filter-text-input"
            onChange={handleFilter}
            ref={(input) => { textInput = input; }}
          />
          <span
            className="input-clear-button"
            onClick={clearSearchField}
            role="button"
            tabIndex="0"
            ref={(span) => { clearButton = span; }}
          >
            <i className="fa fa-times-circle" />
          </span>
        </div>
        {
          renderSearchMessage(props.notes, props.currentWhiteboardId)
        }
        {
          props.notesLoading ?
            <div className="load-spinner">
              <i className="fa fa-cog fa-spin fa-2x fa-fw" />
            Loading
            </div> : ''
        }
      </div>
      <NoteList
        className="NoteList"
        notes={props.notes}
        noteFormId={props.noteForm.id}
        activeForm={props.noteForm.activeForm}
        onRemoveNote={props.handleRemoveNote}
        onUpdateNote={props.handleUpdateNote}
        currentWhiteboardId={props.currentWhiteboardId}
      />
    </div>
  );
};
NotesWrapper.propTypes = notesWrapperProps;

export default NotesWrapper;
