import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { LoadingComponent } from '../LoadingComponent';

describe('LoadingComponent', () => {
  test('should render the loading component', () => {
    render(<LoadingComponent />);

    const circularProgress = screen.getByRole('progressbar');
    expect(circularProgress).toBeInTheDocument();
  });

  test('should have the correct size for CircularProgress', () => {
    render(<LoadingComponent />);

    const circularProgress = screen.getByRole('progressbar');
    expect(circularProgress).toHaveStyle('width: 3rem; height: 3rem;');
  });

  test('should render the Box container', () => {
    const { container } = render(<LoadingComponent />);

    const boxElement = container.querySelector('div');
    expect(boxElement).toBeInTheDocument();
  });
});
