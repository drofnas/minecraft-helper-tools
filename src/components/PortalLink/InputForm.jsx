import PropTypes from 'prop-types';

const InputForm = ({ x, z, origin, handleInputChange, handleSubmit }) => {
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
      <div>
        <label>
          Origin:
          <select name="origin" value={origin} onChange={handleInputChange}>
            <option value="overworld">Overworld</option>
            <option value="nether">Nether</option>
          </select>
        </label>
      </div>
      <button type="submit">Find Portal Link</button>
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