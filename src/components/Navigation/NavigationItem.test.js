import { render, screen } from '@testing-library/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import NavigationItem from './NavigationItem';

describe('NavigationItem component', () => {
  const navigationItemProps = {
    icon: faUser,
    text: 'Test text',
    link: 'testSection',
  };
  test('renders icon, text, link', () => {
    render(<NavigationItem {...navigationItemProps} />);
    const linkElement = screen.getByRole('link');
    expect(linkElement.innerHTML.includes('fa-user')).toBeTruthy();
    expect(linkElement).toHaveAttribute('href', '#testSection');
  });
});
