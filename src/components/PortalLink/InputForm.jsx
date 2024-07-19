import PropTypes from 'prop-types';

const InputForm = ({ x, z, origin, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col">
        <label className="mb-2 text-lg font-semibold text-gray-700">
          X Coordinate:
          <input
            type="number"
            name="x"
            value={x}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-lg font-semibold text-gray-700">
          Z Coordinate:
          <input
            type="number"
            name="z"
            value={z}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </label>
      </div>
      <div className="flex flex-col">
        <label className="mb-2 text-lg font-semibold text-gray-700">
          Origin:
          <select
            name="origin"
            value={origin}
            onChange={handleInputChange}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="overworld">Overworld</option>
            <option value="nether">Nether</option>
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        Find Portal Link
      </button>
    </form>
  );
};

InputForm.propTypes = {
  x: PropTypes.string.isRequired,
  z: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default InputForm;