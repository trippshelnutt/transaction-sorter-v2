import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const headerTitle = screen.getByText(/Transaction Sorter/i);
  expect(headerTitle).toBeInTheDocument();
});
