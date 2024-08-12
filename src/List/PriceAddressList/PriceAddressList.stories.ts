import type { Meta, StoryObj } from '@storybook/react';
import { PriceAddressList, PirceAddressListProps } from '.';
import data from './priceAddressList.json';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'List/PriceAddressList',
  component: PriceAddressList,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof PriceAddressList>;

export default meta;
type Story = StoryObj<typeof meta>;






// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args:{data:data.args_1} as PirceAddressListProps,
};

export const WithRating: Story = {
    args: {data:data.args_2} as PirceAddressListProps,
  };