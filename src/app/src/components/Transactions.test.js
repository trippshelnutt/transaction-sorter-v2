import { render, screen } from '@testing-library/react';
import Transactions from './Transactions';

test('renders app', () => {
  render(<Transactions />);
  const headerTitle = screen.getByText(/Transaction Sorter/i);
  expect(headerTitle).toBeInTheDocument();
});
