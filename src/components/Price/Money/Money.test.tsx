// Imports
import { render, screen } from '@testing-library/react';
import { ProviderWrapper } from '../../../test/wrapper';

// To Test
import { Money } from './';
import { formatPrice } from './utils';



const MoneyData = {
    price:5

}

// Tests
describe('Renders <Money /> correctly', async () => {
    it('render <Money />correctly with the correct translation', async () => {
        // Setup
        render(<Money {...MoneyData} />, {wrapper:ProviderWrapper});
        const money = screen.queryByText('$');
        const priceAsString = screen.queryByText('5.00');
        // Expectations
        expect(money).not.toBeNull();
        expect(priceAsString).not.toBeNull();
    });
});

describe("test for <Money> util functions", ()=>{
     it('correctly formats numbers', ()=>{
        const format = formatPrice;
        console.log('this is format',format)
        expect(format(4)).toBe("4.00")
        expect(format(.5)).toBe("0.50")
        expect(format(5)).toBe("5.00")
     })
})