import React from 'react';
import whiteboardProps from './Whiteboard.props';
import './Whiteboard.css';

const Whiteboard = (props) => {
  const remove = () => {
    props.onRemove(props.id);
  };

  const animateClass = props.animate ? 'added-item' : '';
  return (
    <div className="Whiteboard">
      <li className={`Whiteboard-item ${animateClass}`}>
        <div className="Whiteboard-value">{'props.name'}</div>
        <button
          onClick={remove}
        >
        X
        </button>
      </li>
    </div>
  );
};

Whiteboard.propTypes = whiteboardProps;

export default Whiteboard;
