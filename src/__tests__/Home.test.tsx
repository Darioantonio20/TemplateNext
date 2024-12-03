// src/__tests__/Home.test.tsx
import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

test('renders Hola Mundo', () => {
  render(<Home />);
  const heading = screen.getByText(/Hola Mundo/i);
  expect(heading).toBeInTheDocument();
});