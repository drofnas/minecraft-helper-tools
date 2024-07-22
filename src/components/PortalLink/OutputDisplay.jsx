import PropTypes from 'prop-types';

const OutputDisplay = ({ coordinates }) => {
  const { overworld, nether } = coordinates;

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-lg">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Portal Linking Coords (estimate):</h2>
      <div className="flex justify-between">
        <div className="text-center">
          <h3 className="text-md font-semibold text-gray-700 mb-2">:: Overworld ::</h3>
          <p>X: {overworld.x}, Z: {overworld.z}</p>
        </div>
        <div className="text-center">
          <p className="text-md font-semibold text-gray-700">--links to--</p>
        </div>
        <div className="text-center">
          <h3 className="text-md font-semibold text-gray-700 mb-2">:: Nether ::</h3>
          <p>X: {nether.x}, Z: {nether.z}</p>
        </div>
      </div>
    </div>
  );
};

OutputDisplay.propTypes = {
  coordinates: PropTypes.shape({
    overworld: PropTypes.shape({
      x: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
    nether: PropTypes.shape({
      x: PropTypes.number.isRequired,
      z: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default OutputDisplay;