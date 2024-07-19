import PropTypes from 'prop-types';

const InputForm = ({ x, z, origin, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col">
        <label className="input-label">
          X Coordinate:
        </label>
        <input
          type="number"
          name="x"
          value={x}
          onChange={handleInputChange}
          className="input-txt"
        />
      </div>
      <div className="flex flex-col">
        <label className="input-label">
          Z Coordinate:
        </label>
        <input
          type="number"
          name="z"
          value={z}
          onChange={handleInputChange}
          className="input-txt"
        />
      </div>
      <div className="flex flex-col">
        <label className="input-label">
          Origin:
        </label>
        <select
          name="origin"
          value={origin}
          onChange={handleInputChange}
          className="input-select"
        >
          <option value="overworld">Overworld</option>
          <option value="nether">Nether</option>
        </select>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
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