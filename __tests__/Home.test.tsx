import Home from '@/app/page';
import { render, screen } from '@testing-library/react';

it('should have docs text', () => {
  render(<Home />);

  const myElement = screen.getByText('Docs');

  expect(myElement).toBeInTheDocument();
});
