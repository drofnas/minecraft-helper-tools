import InputForm from './InputForm';

export default {
  title: 'ChunkFind/InputForm',
  component: InputForm,
};

const Template = (args) => <InputForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  x: '120',
  z: '120',
  handleInputChange: () => {},
  handleSubmit: (event) => { event.preventDefault(); },
};