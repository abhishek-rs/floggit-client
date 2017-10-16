import PropTypes from 'prop-types';

const props = {
  whiteboards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })),
  onItemRemove: PropTypes.func.isRequired,
};

export default props;
