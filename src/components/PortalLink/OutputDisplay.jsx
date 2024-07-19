import PropTypes from 'prop-types';

const OutputDisplay = ({ output }) => {
  return (
    <pre>
      {output}
    </pre>
  );
};

OutputDisplay.propTypes = {
  output: PropTypes.string.isRequired
};

export default OutputDisplay;