import PropTypes from 'prop-types';

const props = {
  whiteboards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  isLoading: PropTypes.bool,
  isFormActive: PropTypes.bool,
  handleActivateForm: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default props;
