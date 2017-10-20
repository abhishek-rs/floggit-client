import React from 'react';
import { NavLink } from 'react-router-dom';
import WhiteboardListContainer from '../../common/components/WhiteboardListContainer';

const Home = () => (
  <div className="HomeContainer">
    <header>
      <div className="logo" /><NavLink to={'/'}><h1>Flogg<strong>IT</strong></h1></NavLink>
    </header>
    <div className="HomeContainer-whiteboard-list">
      <WhiteboardListContainer />
    </div>
  </div>
);

export default Home;
