import type { Meta, StoryObj } from '@storybook/react';
import { PriceAddressFetch } from './PriceAddressFetch';
import { handlers } from '../../../mocks/listGet';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Async/PriceAddressFetch',
  component: PriceAddressFetch,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof PriceAddressFetch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  parameters:{
    msw:{
      handlers:[
        ...handlers
      ]
    }
  }
};