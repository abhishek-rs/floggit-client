import React from 'react';
import { NavLink } from 'react-router-dom';
import NotesContainer from '../../common/components/NotesContainer';
import '../../css/master.css';
import '../../css/font-awesome.min.css';

const Whiteboard = props => (
  <div>
    <NavLink to="/" activeClassName="Home-active-link">
      <header>
        <div className="logo" /><h1>Flogg<strong>IT</strong></h1>
      </header>
    </NavLink>
    <NotesContainer currentWhiteboardId={props.match.params.id} />
  </div>
);

export default Whiteboard;
