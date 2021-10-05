import { render, screen } from '@testing-library/react';
import Address from '.';

describe('Address component', () => {
  test('renders phone, email, linkedin', () => {
    render(<Address />);
    expect(screen.getByText('929 238 2891')).toBeInTheDocument();
    expect(screen.getByText('nmilovanova@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('linkedin.com/natalia-milovanova')).toBeInTheDocument();
  });
});
