/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/tailwind.css';

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export default preview;