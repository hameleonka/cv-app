import { render, screen } from '@testing-library/react';
import Feedback from '.';
import { feedbackData } from '../../data';

jest.mock('./FeedbackItem', () => () => (<div> This is feedback item</div>));

describe('Feedback component', () => {
  test('renders 2 children ', () => {
    render(<Feedback data={feedbackData} />);
    expect(screen.getAllByText('This is feedback item').length).toBe(2);
  });
});
