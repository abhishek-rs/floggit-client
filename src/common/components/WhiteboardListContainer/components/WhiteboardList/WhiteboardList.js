import React from 'react';
import Whiteboard from './components/Whiteboard';
import whiteboardListProps from './WhiteboardList.props';
import './WhiteboardList.css';

const WhiteboardList = (props) => {
  const handleRemove = (id) => {
    props.onItemRemove(id);
  };

  return (
    <ul className="WhiteboardList">
      {
        props.whiteboards.map(whiteboard => (
          <Whiteboard
            key={whiteboard.id}
            id={whiteboard.id}
            name={whiteboard.name}
            onRemove={handleRemove}
          />
        ))
      }
    </ul>
  );
};

WhiteboardList.propTypes = whiteboardListProps;

export default WhiteboardList;
