// Imports
import { render, screen } from '@testing-library/react';

// To Test
import App from './App';

// Tests
describe('Renders main page correctly', async () => {
    it('Should render the page correctly', async () => {
        // Setup
        render(<App />);
        const h1 = await screen.queryByText('Vite + React');

        // Expectations
        expect(h1).not.toBeNull();
    });
});
