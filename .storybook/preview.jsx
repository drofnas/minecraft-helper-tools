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
    backgrounds: {
      default: 'gradient', // You can set the default background color here
      values: [
        {
          name: 'gradient',
          value: 'linear-gradient(90deg, #86E3CE, #D0E6A5)',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
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