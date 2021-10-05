import { render, screen } from '@testing-library/react';
import ExpertiseItem from './ExpertiseItem';

describe('ExpertiseItem component', () => {
  const expertiseItemProps = {
    date: '01/01/01',
    company: 'Test company',
    job: 'Test job',
    description: 'Test description',
  };

  test('renders date, company, job, description', () => {
    render(<ExpertiseItem {...expertiseItemProps} />);
    expect(screen.getByText('01/01/01')).toBeInTheDocument();
    expect(screen.getByText('Test company')).toBeInTheDocument();
    expect(screen.getByText('Test job')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });
});
