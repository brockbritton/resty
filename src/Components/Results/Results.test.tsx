import Results from './index';
import { render, screen } from '@testing-library/react';

describe('Testing Results Component', () => {
    const data = {
        headers: {apple: 'banananana'},
        results: [
            {name: "bnn", url: "aaa"}
        ]
    }
    test('Should display results data', async () => {
        render(<Results data={data} />)
       expect(screen.getByText(/banananana/)).toBeVisible() 
    })
})