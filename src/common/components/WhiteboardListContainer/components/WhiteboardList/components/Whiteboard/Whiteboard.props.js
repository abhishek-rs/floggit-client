import PropTypes from 'prop-types';

const props = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  animate: PropTypes.bool,
  onRemove: PropTypes.func.isRequired,
};

export default props;
