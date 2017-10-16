import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <div className="HomeContainer">
    <NavLink to="/" activeClassName="Home-active-link">
      <header>
        <div className="logo" /><h1>Flogg<strong>IT</strong></h1>
        <button
          type="button"
          className="HomeContainer-create-button"
        >
          Create whiteboard
        </button>
      </header>
    </NavLink>
    <div className="HomeContainer-whiteboard-list Note">
      <h1>Whiteboards</h1>
      <ul>
        <li>
          <NavLink to="whiteboards" activeClassName="Home-active-link">Whiteboard</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Home;
