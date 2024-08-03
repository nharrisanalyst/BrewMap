// Imports
import { render, screen } from '@testing-library/react';

// To Test
import { BrewImage } from './';

const ImageData = {
    src:'https://i.natgeofe.com/n/4cebbf38-5df4-4ed0-864a-4ebeb64d33a4/NationalGeographic_1468962_3x4.jpg',
    alt:'A picture of a Orange Cat',

}

// Tests
describe('Renders <BrewImage /> correctly', async () => {
    it('render <BrewImage />correctly', async () => {
        // Setup
        render(<BrewImage {...ImageData} />);
        const image = await screen.queryByAltText('A picture of a Orange Cat');

        // Expectations
        expect(image).not.toBeNull();
    });
});