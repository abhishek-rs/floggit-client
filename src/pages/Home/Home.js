import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="HomeContainer">
    <header>
      <div className="logo" /><h1>Flogg<strong>IT</strong></h1>
    </header>
    <div className="HomeContainer-whiteboard-list">
      <NavLink to="whiteboard" activeClassName="Home-active-link">Whiteboard</NavLink>
      <NavLink to="/" activeClassName="Home-active-link">Home</NavLink>
    </div>
  </div>
);

export default Home;
