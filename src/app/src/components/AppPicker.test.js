import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import AppPicker from './AppPicker';

test('renders app', () => {
  render(
    <BrowserRouter>
      <AppPicker />
    </BrowserRouter>
  );
  const openButton = screen.getByText(/Open/i);
  expect(openButton).toBeInTheDocument();
});
