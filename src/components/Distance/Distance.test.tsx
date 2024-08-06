// Imports
import { render, screen } from '@testing-library/react';


// To Test
import { Distance } from './';

const MilesData = {
    miles: .5678,
}


// Tests
describe('Renders <Miles /> correctly', async () => {
    it('render <Miles />correctly with the correctly formatted number', async () => {
        // Setup
        render(<Distance {...MilesData} />);
        const distance = screen.queryByText('0.57 mi');
        


        // Expectations
        expect(distance).toHaveTextContent('0.57 mi')
    });
    
});