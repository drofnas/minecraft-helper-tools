import OutputDisplay from './OutputDisplay';

export default {
  title: 'ChunkFind/OutputDisplay',
  component: OutputDisplay,
};

const Template = (args) => <OutputDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  output: '0,0                15,0\n----------------\n-              -\n-              -\n-              -\n-              -\n----------------\n0,15               15,15',
};