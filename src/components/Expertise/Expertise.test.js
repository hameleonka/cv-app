import { render, screen } from '@testing-library/react';
import Expertise from '.';
import { expertiseData } from '../../utils/data';

jest.mock('./ExpertiseItem', () => () => (<div> This is expertise item</div>));

describe('Expertise component', () => {
  test('renders 2 children ', () => {
    render(<Expertise data={expertiseData} />);
    expect(screen.getAllByText('This is expertise item').length).toBe(4);
  });
});
