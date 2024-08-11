import type { Meta, StoryObj } from '@storybook/react';
import { CoffeeShopPrice } from './';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'CombinedComponents/CoffeeShopPrice',
  component: CoffeeShopPrice,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof CoffeeShopPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    ImageProps:{
        src:'https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_3x4.jpg',
        alt:'A picture of a Orange Cat'
    },
    NameAddressRatingsProps:{
        name:'Shady Coffee & Tea',
        address:'325 Douglas Blvd, Roseville, CA 95678',
    },
    DistanceProps:{
        miles: .5678
    },
    PriceProps:{
        price:5,
        menuItem:'Latte',
        reporter:'BrewMapData'
    }
  },
};

export const WithRating: Story = {
    args: {
      ImageProps:{
          src:'https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_3x4.jpg',
          alt:'A picture of a Orange Cat'
      },
      NameAddressRatingsProps:{
          name:'Shady Coffee & Tea',
          address:'325 Douglas Blvd, Roseville, CA 95678',
          rating:3.5,
          ratings:13
      },
      DistanceProps:{
          miles: .5678
      },
      PriceProps:{
          price:5,
          menuItem:'Latte',
          reporter:'BrewMapData'
      }
    },
  };