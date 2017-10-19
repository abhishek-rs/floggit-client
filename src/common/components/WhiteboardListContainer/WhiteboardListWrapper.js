import React from 'react';
import WhiteboardInput from './components/WhiteboardInput';
import WhiteboardList from './components/WhiteboardList';
import whiteboardListProps from './WhiteboardListWrapper.props';
import './WhiteboardListContainer.css';

const WhiteboardListWrapper = (props) => {
  const generateForm = handleAdd => (
    <WhiteboardInput onAdd={handleAdd} />
  );

  const generateLoadingWidget = () => (
    <div> Loading </div>
  );

  const generateList = (isLoading, whiteboards, handleRemove) => (
    <div>
      {
        isLoading ?
          generateLoadingWidget :
          <WhiteboardList
            whiteboards={whiteboards}
            onItemRemove={handleRemove}
          />
      }
    </div>
  );

  return (
    <div className="WhiteboardListContainer-wrapper">
      <div className="WhiteboardListContainer-create-button">
        <button
          type="button"
          className="HomeContainer-create-button"
          onClick={props.handleActivateForm}
        >
          Create whiteboard
        </button>
      </div>
      {
        props.isFormActive ?
          generateForm(props.handleAdd) :
          generateList(props.isLoading, props.whiteboards, props.handleRemove)
      }
    </div>
  );
};

WhiteboardListWrapper.propTypes = whiteboardListProps;

export default WhiteboardListWrapper;
