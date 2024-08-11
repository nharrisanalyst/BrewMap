// Imports
import { render, screen } from '@testing-library/react';
import { args } from './CoffeShopPrice.stories';


// To Test
import { CoffeeShopPrice } from './';

const CoffeeShopPriceData = args;


// Tests
describe('Renders <Miles /> correctly', async () => {
    it('render <Miles />correctly with the correctly formatted number', async () => {
        // Setup
        render(<CoffeeShopPrice {...CoffeeShopPriceData} />);
        const name = screen.queryByText(args.NameAddressRatingsProps.name);
        


        // Expectations
        expect(name).toHaveTextContent(args.NameAddressRatingsProps.name)
    });
    
});