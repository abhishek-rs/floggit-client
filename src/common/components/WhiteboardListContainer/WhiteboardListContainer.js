import { connect } from 'react-redux';
import { addWhiteboard, removeWhiteboard, activateForm } from '../../../reduxStore/config/whiteboards';
import WhiteboardListWrapper from './WhiteboardListWrapper';

const mapStateToProps = state => ({
  whiteboards: state.whiteboards.data,
  isLoading: state.whiteboards.isLoading,
  isFormActive: state.whiteboards.activeForm,
});

const mapDispatchToProps = dispatch => ({
  handleActivateForm: () => {
    dispatch(activateForm());
  },
  handleAdd: (value) => {
    dispatch(addWhiteboard(value));
  },
  handleRemove: (id) => {
    dispatch(removeWhiteboard(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(WhiteboardListWrapper);
