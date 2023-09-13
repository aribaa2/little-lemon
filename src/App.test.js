import { render, screen } from '@testing-library/react';
import App from './App';
import { TableReserveForm } from './components/TableReserveForm';
import { OrderOnline } from './components/OrderOnline';

test('renders TableReserve Form', () => {
  render(<OrderOnline />);
  const BookingElement = screen.getByText("Order Food Online");
  expect(BookingElement).toBeInTheDocument();
});
