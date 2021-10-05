import { render, screen } from '@testing-library/react';
import Loader from '.';

describe('Loader component', () => {
  test('renders icon', () => {
    render(<Loader />);
    expect(screen.getByTestId('icon').innerHTML.includes('fa-sync-alt')).toBeTruthy();
  });
});
