import { render, screen } from '@testing-library/react';
import data from './priceAddressList.json';


// To Test
import { PriceAddressList, PirceAddressListProps } from '.';

const PriceAddressListData = {data:data.args_1} as PirceAddressListProps;

// Tests
describe('Renders <PriceAddressList /> correctly',() => {
    it('render <PriceAddressList /> correctly', async () => {
        // Setup
        render(<PriceAddressList {...PriceAddressListData} />);
        const image = screen.queryAllByAltText("A picture of a Orange Cat")

        // Expectations
        expect(image).not.toBeNull();
    });
});