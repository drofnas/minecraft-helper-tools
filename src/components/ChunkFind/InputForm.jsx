import PropTypes from 'prop-types';

const InputForm = ({ x, z, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          X Coordinate:
          <input type="number" name="x" value={x} onChange={handleInputChange} />
        </label>
      </div>
      <div>
        <label>
          Z Coordinate:
          <input type="number" name="z" value={z} onChange={handleInputChange} />
        </label>
      </div>
      <button type="submit">Find Chunk</button>
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