import OutputDisplay from './OutputDisplay';

export default {
  title: 'ChunkFind/OutputDisplay',
  component: OutputDisplay,
};

const Template = (args) => <OutputDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  coordinates: {
    topLeft: { x: 0, z: 0 },
    topRight: { x: 15, z: 0 },
    bottomLeft: { x: 0, z: 15 },
    bottomRight: { x: 15, z: 15 },
  },
};