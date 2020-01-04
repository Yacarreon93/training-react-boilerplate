import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
    it('Runs and passes', () => {
        expect(true).toBe(true);
    });
    
    it('Renders without error', () => {
        render(<App />);
        expect(screen.getByText('HELLO WORLD')).toBeInTheDocument();
    });
});