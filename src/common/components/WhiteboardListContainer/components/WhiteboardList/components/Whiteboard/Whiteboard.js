import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <div className="Whiteboard-value">
          <NavLink to={`whiteboards/${props.id}`}>
            {props.name}
          </NavLink>
        </div>
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
