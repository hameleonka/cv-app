import { render, screen } from '@testing-library/react';
import FeedbackItem from './FeedbackItem';

describe('FeedbackItem component', () => {
  const feedbackItemProps = {
    feedback: 'Test feedback',
    name: 'Testname',
    citeUrl: 'https://www.test.com',
  };

  test('renders feedback, name, link', () => {
    render(<FeedbackItem {...feedbackItemProps} />);
    expect(screen.getByText('Test feedback')).toBeInTheDocument();
    expect(screen.getByText(/Testname/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://www.test.com');
  });
});
