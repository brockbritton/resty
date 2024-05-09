import Header from './index';
import { render, screen } from '@testing-library/react';

describe('Testing Header Component', () => {
  test('Renders Header Component', async () => {
    render(
      <Header />
    )

    screen.debug();
    expect(screen.getByText(/RESTy/)).toBeVisible();
  });
});