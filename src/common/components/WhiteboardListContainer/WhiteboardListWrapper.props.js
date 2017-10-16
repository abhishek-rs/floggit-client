import PropTypes from 'prop-types';

const props = {
  isLoading: PropTypes.string,
  whiteboards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  handleAdd: PropTypes.func.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default props;
