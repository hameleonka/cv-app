import { render, screen } from '@testing-library/react';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import userEvent from '@testing-library/user-event';
import Button from '.';

describe('Button component', () => {
  const btnProps = {
    icon: faChevronLeft,
    text: 'Go back',
    classes: 'test',
    onClickHandler: jest.fn(),
  };
  test('adds icon class', () => {
    render(<Button {...btnProps} />);
    const btnElement = screen.getByRole('button');
    expect(btnElement.innerHTML.includes('fa-chevron-left')).toBeTruthy();
    expect(screen.getByText('Go back')).toBeInTheDocument();
    expect(btnElement.classList.contains('test')).toBeTruthy();
    userEvent.click(btnElement);
    expect(btnProps.onClickHandler).toHaveBeenCalled();
  });
});
