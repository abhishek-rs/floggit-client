import PropTypes from 'prop-types';

const props = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default props;
