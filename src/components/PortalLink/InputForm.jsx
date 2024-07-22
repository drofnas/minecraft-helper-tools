import PropTypes from 'prop-types';
import { Input, Button, Label, Field, Select } from '@headlessui/react'

const InputForm = ({ x, z, origin, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg shadow-md max-w-lg">
      <Field className="flex flex-col">
        <Label className="input-label">
          X Coordinate:
        </Label>
        <Input
          type="number"
          name="x"
          value={x}
          onChange={handleInputChange}
          className="input-txt"
        />
      </Field>
      <Field className="flex flex-col">
        <Label className="input-label">
          Z Coordinate:
        </Label>
        <Input
          type="number"
          name="z"
          value={z}
          onChange={handleInputChange}
          className="input-txt"
        />
      </Field>
      <Field className="flex flex-col">
        <Label className="input-label">
          Origin:
        </Label>
        <Select
          name="origin"
          value={origin}
          onChange={handleInputChange}
          className="input-select"
        >
          <option value="overworld">Overworld</option>
          <option value="nether">Nether</option>
        </Select>
      </Field>
      <Button
        type="submit"
        className="btn btn-primary"
      >
        Find Portal Link
      </Button>
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