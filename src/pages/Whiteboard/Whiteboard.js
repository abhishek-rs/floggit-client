import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesContainer from '../../common/components/NotesContainer';
import whiteboardProps from './Whiteboard.props';
import '../../css/master.css';
import '../../css/font-awesome.min.css';

const Whiteboard = props => (
  <div>
    <header>
      <div className="logo" />
      <NavLink to={'/'}>
        <h1>Flogg<strong>IT</strong></h1>
      </NavLink>
    </header>
    <NotesContainer currentWhiteboardId={props.match.params.id} />
  </div>
);

Whiteboard.propTypes = whiteboardProps;

export default Whiteboard;
