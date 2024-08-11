// Imports
import { render, screen } from '@testing-library/react';
import {formatAddress} from "./utils";

// To Test
import { NameAddressRating} from './';

const NameAddressRatingData = {
    name:'Shady Coffee & Tea',
    address:'325 Douglas Blvd, Roseville, CA 95678',
    miles:0.56

}
const NameAddressRatingData_ratings = {
    name:'Shady Coffee & Tea',
    address:'325 Douglas Blvd, Roseville, CA 95678',
    rating:3.5,
    ratings:13,
    miles:0.56

}

const formatedAdd = formatAddress(NameAddressRatingData.address);
// Tests
describe('Renders <NameAddressRating /> correctly', async () => {
    it('render <NameAddressRating />correctly', async () => {
        // Setup
        render(<NameAddressRating {...NameAddressRatingData} />);
        const name = screen.queryByText('Shady Coffee & Tea');
        const address = screen.queryByText(formatedAdd);


        // Expectations
        expect(name).not.toBeNull();
        expect(address).not.toBeNull();
    });

    it('render <NameAddressRating />correctly', async () => {
        // Setup
        render(<NameAddressRating {...NameAddressRatingData_ratings} />);
        const name = screen.queryByText('Shady Coffee & Tea');
        const address = screen.queryByText(formatedAdd);
        const ratings = screen.queryByText("(13)");


        // Expectations
        expect(name).not.toBeNull();
        expect(address).not.toBeNull();
        expect(ratings).not.toBeNull();
    });
    
});