import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app header title', () => {
  render(<App />);
  const linkElement = screen.getByText(/fighter jet inspection tracker/i);
  expect(linkElement).toBeInTheDocument();
});
