import { render, screen } from '@testing-library/react';
import App from './App';

beforeAll(() => {
  jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
});

test('renders App component', () => {
  render(<App />);
  const appElement = screen.getByTestId('app');
  expect(appElement).toBeInTheDocument();
});