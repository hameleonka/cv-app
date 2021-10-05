import { render, screen } from '@testing-library/react';
import Error from '.';

describe('Error component', () => {
  test('renders error message', () => {
    render(<Error />);
    expect(screen.getByText('Something went wrong; please review your server connection!')).toBeInTheDocument();
  });
});
