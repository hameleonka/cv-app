import { render, screen } from '@testing-library/react';
import Box from '.';

jest.mock('../Loader', () => () => (<div> This is loader</div>));
jest.mock('../Error', () => () => (<div> This is error</div>));
const MockComponent = () => (<div>This is component</div>);

describe('Box component', () => {
  const boxProps = {
    title: 'Title',
    content: 'Box content',
    id: 'test',
    showLoader: true,
    showError: true,
    showComponent: true,
    component: <MockComponent />,
  };

  test('renders title and text', () => {
    render(<Box {...boxProps} />);
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Box content')).toBeInTheDocument();
  });

  test('renders external components when show props true', () => {
    render(<Box {...boxProps} />);
    expect(screen.getByText('This is loader')).toBeInTheDocument();
    expect(screen.getByText('This is error')).toBeInTheDocument();
    expect(screen.getByText('This is component')).toBeInTheDocument();
  });

  test('does not render external components when show props false', () => {
    const boxWithoutComponents = {
      ...boxProps,
      showLoader: false,
      showError: false,
      showComponent: false,
    };
    render(<Box {...boxWithoutComponents} />);
    expect(screen.queryByText('This is loader')).toBeNull();
    expect(screen.queryByText('This is error')).toBeNull();
    expect(screen.queryByText('This is component')).toBeNull();
  });
});
