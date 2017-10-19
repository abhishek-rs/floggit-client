import React from 'react';
import WhiteboardListContainer from '../../common/components/WhiteboardListContainer';
import './Home.css';

const Home = () => (
  <div className="HomeContainer">
    <header>
      <div className="logo" /><h1>Flogg<strong>IT</strong></h1>
    </header>
    <div className="HomeContainer-whiteboard-list Note">
      <WhiteboardListContainer />
    </div>
  </div>
);

export default Home;
