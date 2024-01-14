import { render, screen } from '@testing-library/react';
import AppPicker from './AppPicker';

test('renders app', () => {
  render(<AppPicker />);
  const openButton = screen.getByText(/Open/i);
  expect(openButton).toBeInTheDocument();
});
