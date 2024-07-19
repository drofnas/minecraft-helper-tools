import OutputDisplay from './OutputDisplay';

export default {
  title: 'PortalLink/OutputDisplay',
  component: OutputDisplay,
};

const Template = (args) => <OutputDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  coordinates: {
    overworld: { x: -30000, z: -30000 },
    nether: { x: -3750, z: -3750 },
  },
};