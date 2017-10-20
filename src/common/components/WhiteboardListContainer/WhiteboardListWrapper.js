import React from 'react';
import WhiteboardInput from './components/WhiteboardInput';
import WhiteboardList from './components/WhiteboardList';
import whiteboardListProps from './WhiteboardListWrapper.props';
import './WhiteboardListWrapper.css';

const WhiteboardListWrapper = (props) => {
  const generateForm = (handleAdd, handleCloseForm) => (
    <div className="Whiteboard-input">
      <WhiteboardInput onAdd={handleAdd} onCloseForm={handleCloseForm} />
    </div>
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
      <div className="WhiteboardListContainer-toolbar">
        <button
          type="button"
          className="WhiteboardListContainer-create-button"
          disabled={props.isFormActive}
          onClick={props.handleActivateForm}
        >
          New whiteboard
        </button>
        <h1 className="WhiteboardListContainer-header">Whiteboards</h1>
      </div>
      {
        props.isFormActive ?
          generateForm(props.handleAdd, props.handleCloseForm) :
          generateList(props.isLoading, props.whiteboards, props.handleRemove)
      }
    </div>
  );
};

WhiteboardListWrapper.propTypes = whiteboardListProps;

export default WhiteboardListWrapper;
