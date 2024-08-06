import { render, screen } from '@testing-library/react';
import { Price } from './';
import { ProviderWrapper } from '../../test/wrapper';

const PriceData = {
    price: 5,
    menuItem:'Latte',
}


// Tests
describe('Renders <Price /> correctly',() => {
    it('render <Price />correctly with the correctly formatted number',() => {
        // Setup
        render(<Price {...PriceData} />, {wrapper:ProviderWrapper});
        const price = screen.queryByText('5.00');
        const menuItem = screen.queryByText('Latte');
        const reporter = screen.queryByText('BrewMapData');
        
        // Expectations
        expect(price).toHaveTextContent('5.00');
        expect(menuItem).toHaveTextContent('Latte');
        expect(reporter).toHaveTextContent('BrewMapData');
    });
    
});