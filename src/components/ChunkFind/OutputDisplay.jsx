import PropTypes from 'prop-types';

const OutputDisplay = ({ coordinates }) => {
  const { topLeft, topRight, bottomLeft, bottomRight } = coordinates;

  return (
    <div className="relative w-64 h-64 border border-gray-500 mx-auto mt-4">
      <div className="absolute left-0 top-0 transform -translate-x-1/2 -translate-y-1/2 bg-white p-1">
        {topLeft.x},{topLeft.z}
      </div>
      <div className="absolute right-0 top-0 transform translate-x-1/2 -translate-y-1/2 bg-white p-1">
        {topRight.x},{topRight.z}
      </div>
      <div className="absolute left-0 bottom-0 transform -translate-x-1/2 translate-y-1/2 bg-white p-1">
        {bottomLeft.x},{bottomLeft.z}
      </div>
      <div className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 bg-white p-1">
        {bottomRight.x},{bottomRight.z}
      </div>
    </div>
  );
};

OutputDisplay.propTypes = {
  coordinates: PropTypes.shape({
    topLeft: PropTypes.shape({
      x: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    topRight: PropTypes.shape({
      x: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    bottomLeft: PropTypes.shape({
      x: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    bottomRight: PropTypes.shape({
      x: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default OutputDisplay;