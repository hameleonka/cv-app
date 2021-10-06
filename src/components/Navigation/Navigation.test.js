import { render, screen } from '@testing-library/react';
import Navigation from '.';

jest.mock('./NavigationItem', () => ({ text }) => (
  <div>
    {' '}
    This is navigation item
    <span>{text}</span>
  </div>
));

describe('Navigation component', () => {
  test('renders 2 children ', () => {
    render(<Navigation />);
    expect(screen.getByText('About me')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Skills')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Contacts')).toBeInTheDocument();
    expect(screen.getByText('Feedbacks')).toBeInTheDocument();
  });
});
