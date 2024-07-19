import PropTypes from 'prop-types';
import { Input, Button, Label, Field } from '@headlessui/react'

const InputForm = ({ x, z, handleInputChange, handleSubmit }) => {
  return (
    <form id={"ChunkFindForm"} onSubmit={handleSubmit} className="space-y-4 p-4 bg-white rounded-lg border border-emerald-500">
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
      <Button
        type="submit"
        className="btn btn-primary"
      >
        Find Chunk
      </Button>
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