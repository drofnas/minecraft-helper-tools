import OutputDisplay from './OutputDisplay';

export default {
  title: 'PortalLink/OutputDisplay',
  component: OutputDisplay,
};

const Template = (args) => <OutputDisplay {...args} />;

export const Default = Template.bind({});
Default.args = {
  output: `
    Portal Linking Coords (estimate):
    :: Overworld ::                   ::  Nether  ::
    X:-30000, Z:-30000   --links to--   X:-3750, Z:-3750
  `,
};