import React from 'react';
import noteFormProps from './NoteForm.props';
import './NoteForm.css';
import ColorSelect from './components/ColorSelect';
import { NOTE_COLORS } from '../../../../../utils/constants';

const NoteForm = (props) => {
  let infoItemInput;

  const handleChangeTitle = (event) => {
    props.onTitleUpdate(event.target.value);
  };

  const handleChangeColor = (event) => {
    props.onColorUpdate(event.target.value);
  };

  const handleAddInfoItem = () => {
    props.onAddInfoItem(infoItemInput.value);
    infoItemInput.value = '';
  };

  const handleRemoveInfoItem = (id) => {
    props.onRemoveInfoItem(id);
  };

  const handleSaveNote = () => {
    props.onSaveNote(props.whiteboardId);
  };

  const handleCloseForm = () => {
    props.onCloseForm();
  };

  return (
    <div className={`NoteForm ${props.color}`}>
      <input
        className="test--NoteForm-title-input"
        type="text"
        value={props.title}
        onChange={handleChangeTitle}
        placeholder="Add title"
        disabled={props.isLoading}
      /><br />
      <div className="one-line-input">
        <input
          className="test--NoteForm-info-item-input"
          type="text"
          placeholder="Add information"
          disabled={props.isLoading}
          ref={(c) => { infoItemInput = c; }}
        />
        <button
          className="test--NoteForm-info-item-btn"
          type="button"
          onClick={handleAddInfoItem}
          disabled={props.isLoading}
        >
            Add
        </button>
      </div>
      <ul className="generic-list info-list">
        {
          props.information.map(infoItem => (
            <li key={infoItem.id}>{infoItem.text}
              <button
                className="icon-button danger test--NoteForm-info-item-remove-btn"
                type="button"
                disabled={props.isLoading}
                onClick={() => handleRemoveInfoItem(infoItem.id)}
              >
                <i className="fa fa-trash" />
              </button>
            </li>
          ))
        }
      </ul>
      <ColorSelect
        colors={NOTE_COLORS}
        selectedColor={props.color}
        onColorUpdate={handleChangeColor}
        disabled={props.isLoading}
      />
      <button
        className="test--NoteForm-save-btn"
        type="button"
        onClick={handleSaveNote}
        disabled={props.isLoading}
      >
        {props.id ? 'Update note' : 'Save Note'}
      </button>
      <button
        className="secondary test--NoteForm-cancel-btn"
        type="button"
        onClick={handleCloseForm}
        disabled={props.isLoading}
      >
        Cancel
      </button>
    </div>
  );
};

NoteForm.propTypes = noteFormProps;

export default NoteForm;
