import React from 'react';
import whiteboardInputProps from './WhiteboardInput.props';
import './WhiteboardInput.css';

const WhiteboardInput = (props) => {
  let nameInput;

  const handleClick = () => {
    props.onAdd(nameInput.value);
    nameInput.value = '';
  };

  return (
    <div className="WhiteboardInput">
      <input
        type="text"
        ref={(currentElement) => { nameInput = currentElement; }}
        placeholder="name"
      />
      <button
        type="button"
        onClick={handleClick}
      >
      create
      </button>
    </div>
  );
};

WhiteboardInput.propTypes = whiteboardInputProps;

export default WhiteboardInput;
