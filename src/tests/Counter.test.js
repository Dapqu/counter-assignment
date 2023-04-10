// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react';
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMessage = screen.getByText('Counter');
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countDisplay = screen.getByTestId('count');
  expect(countDisplay).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countDisplay = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton);
  expect(countDisplay).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countDisplay = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  expect(countDisplay).toHaveTextContent('-1');
});