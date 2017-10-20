import React from 'react';
import whiteboardInputProps from './WhiteboardInput.props';
import './WhiteboardInput.css';

const WhiteboardInput = (props) => {
  let nameInput;

  const handleCreateClick = () => {
    props.onAdd(nameInput.value);
    nameInput.value = '';
  };

  const handleCancelClick = () => {
    props.onCloseForm();
  };

  return (
    <div className="WhiteboardInput-form">
      <h3>Create whiteboard</h3>
      <input
        type="text"
        ref={(currentElement) => { nameInput = currentElement; }}
        placeholder="name"
      />
      <div className="WhiteboardInput-button-container">
        <button
          type="button"
          onClick={handleCreateClick}
        >
          create
        </button>
        <button
          type="button"
          className="secondary"
          onClick={handleCancelClick}
        >
      cancel
        </button>
      </div>
    </div>
  );
};

WhiteboardInput.propTypes = whiteboardInputProps;

export default WhiteboardInput;
