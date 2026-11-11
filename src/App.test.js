

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI/CD demo heading', () => {
  render(<App />);
  const heading = screen.getByText(/continuous integration\/continuous deployment demo/i);
  expect(heading).toBeInTheDocument();
});