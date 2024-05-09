
import Footer from './index.tsx';
import { render, screen } from '@testing-library/react';

describe('Testing Footer Component', () => {
    test('Renders Footer Component'), async () => {
      render(
        <Footer />
      )
  
      screen.debug();
      expect(screen.getByText(/2018/)).toBeVisible();
    }
  });