import PropTypes from 'prop-types';

const InputForm = ({ x, z, handleInputChange, handleSubmit }) => {
  return (
    <form id={"ChunkFindForm"} onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg border border-emerald-500">
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
      <button
        type="submit"
        className="btn btn-primary"
      >
        Find Chunk
      </button>
    </form>
  );
};

InputForm.propTypes = {
  x: PropTypes.string.isRequired,
  z: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default InputForm;