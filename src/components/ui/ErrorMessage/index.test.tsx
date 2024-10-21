import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../ErrorMessage';

describe('ErrorMessage Component', () => {
  test('should render the error message component', () => {
    const errorText = 'An unexpected error occurred';
    render(<ErrorMessage error={errorText} />);

    const errorElement = screen.getByText(errorText);
    expect(errorElement).toBeInTheDocument();
  });

  test('should have the correct variant for Typography', () => {
    const errorText = 'An unexpected error occurred';
    render(<ErrorMessage error={errorText} />);

    const errorElement = screen.getByText(errorText);
    expect(errorElement.tagName).toBe('H4');
  });

  test('should render the Box container', () => {
    const errorText = 'An unexpected error occurred';
    const { container } = render(<ErrorMessage error={errorText} />);

    const boxElement = container.querySelector('div');
    expect(boxElement).toBeInTheDocument();
  });
});
