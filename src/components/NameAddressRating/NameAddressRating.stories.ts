import type { Meta, StoryObj } from '@storybook/react';
import { NameAddressRating } from './';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'components/NameAddressRating',
  component: NameAddressRating,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof NameAddressRating>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    name:'Shady Coffee & Tea',
    address:'325 Douglas Blvd, Roseville, CA 95678',
    miles:0.56
  },
};

export const  WithRatings:Story ={
    args: {
      name:'Shady Coffee & Tea',
      address:'325 Douglas Blvd, Roseville, CA 95678',
      rating:3.5,
      ratings:13,
      miles:0.56
    }
}


