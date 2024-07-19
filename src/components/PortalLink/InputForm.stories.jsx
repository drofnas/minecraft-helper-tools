import InputForm from './InputForm';

export default {
  title: 'PortalLink/InputForm',
  component: InputForm,
};

const Template = (args) => <InputForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  x: '135',
  z: '135',
  origin: 'overworld',
  handleInputChange: () => {},
  handleSubmit: (event) => { event.preventDefault(); },
};