// Imports
import { render, screen } from '@testing-library/react';

// To Test
import { Money } from './';

const MoneyData = {
    price:5.00

}

// Tests
describe('Renders <Money /> correctly', async () => {
    it('render <Money />correctly with the correct translation', async () => {
        // Setup
        render(<Money {...MoneyData} />);
        const money = screen.queryByAltText('$');
        const priceAsString = screen.queryByAltText('5.00');

        // Expectations
        //expect(money).not.toBeNull();
        expect(priceAsString).not.toBeNull();
    });
});