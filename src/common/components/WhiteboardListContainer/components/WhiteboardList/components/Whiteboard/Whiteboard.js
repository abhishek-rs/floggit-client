import React from 'react';
import { NavLink } from 'react-router-dom';
import whiteboardProps from './Whiteboard.props';
import './Whiteboard.css';

const Whiteboard = (props) => {
  const remove = () => {
    props.onRemove(props.id);
  };

  return (
    <div className="Whiteboard">
      <li className={'Whiteboard-item'}>
        <div className="Whiteboard-item-value">
          {props.name}
          <div className="Whiteboard-item-toolbar">
            <button className="Whiteboard-rm-btn icon-button danger" type="button" onClick={remove}>
              <i className="fa fa-trash fa-lg" />
            </button>
            <button className="Whiteboard-notes-btn icon-button danger" type="button">
              <NavLink to={`whiteboards/${props.id}`} style={{ textDecoration: 'none' }}><i className="fa fa-arrow-circle-o-right" /></NavLink>
            </button>
          </div>
        </div>
      </li>
    </div>
  );
};

Whiteboard.propTypes = whiteboardProps;

export default Whiteboard;
