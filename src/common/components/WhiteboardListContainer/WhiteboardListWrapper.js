import React from 'react';
import WhiteboardInput from './components/WhiteboardInput';
import WhiteboardList from './components/WhiteboardList';
import whiteboardListProps from './WhiteboardListWrapper.props';
import './WhiteboardListContainer.css';

const WhiteboardListWrapper = (props) => {
  const generateList = (whiteboards, handleRemove) => (
    <WhiteboardList
      whiteboards={whiteboards}
      onItemRemove={handleRemove}
    />
  );

  const generateLoadingWidget = () => (
    <div> Loading </div>
  );

  return (
    <div className="WhiteboardListContainer-wrapper">
      {
        props.isLoading ?
          generateLoadingWidget() :
          generateList(props.whiteboards, props.props.handleRemove)
      }
    </div>
  );
};

WhiteboardListWrapper.propTypes = whiteboardListProps;

export default WhiteboardListWrapper;
