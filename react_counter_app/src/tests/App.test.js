import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const headerElement = screen.getByText(/Simple React Counter App/i);
  const incButtonElement = screen.getByText(/Increment/i);
  const decButtonElement = screen.getByText(/Decrement/i);

  expect(headerElement).toBeInTheDocument();
  expect(incButtonElement).toBeInTheDocument();
  expect(decButtonElement).toBeInTheDocument();
});

test('render initial counter value 0', () => {
  render(<App />);

  const counterElement = screen.getByText(/count: 0/);

  expect(counterElement).toBeInTheDocument();
});

test('increment counter when increment button is clicked', () => {
  render(<App />)

  const incButton = screen.getByText(/Increment/);
  const counterElement = screen.getByText(/count: 0/);

  fireEvent.click(incButton);

  expect(counterElement).toHaveTextContent(/count: 1/);

  fireEvent.click(incButton);

  expect(counterElement).toHaveTextContent(/count: 2/);
});

test('decrement counter when decrement button is clicked', () => {
  render(<App />)
  const incButton = screen.getByText(/Increment/);
  const decButton = screen.getByText(/Decrement/);
  const counterElement = screen.getByText(/count: 0/);

  fireEvent.click(incButton);
  fireEvent.click(incButton);

  expect(counterElement).toHaveTextContent(/count: 2/);

  fireEvent.click(decButton);

  expect(counterElement).toHaveTextContent(/count: 1/);

});

test('counter does not go below 0', () => {
  render(<App />)
  const decButton = screen.getByText(/Decrement/);
  const counterElement = screen.getByText(/count: 0/);

  fireEvent.click(decButton);
  expect(counterElement).toHaveTextContent(/count: 0/);
}

);

test('buttons are endabled and clickable', () => {
  render(<App />)

  const incButton = screen.getByText(/Increment/);
  const decButton = screen.getByText(/Decrement/);

  expect(incButton).toBeEnabled();
  expect(decButton).toBeEnabled();
  expect(incButton.getAttribute('type')).toBe('button');
  expect(decButton.getAttribute('type')).toBe('button');
});
