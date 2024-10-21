import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeaderTitle } from '../HeaderTitle';

describe('HeaderTitle Component', () => {
  test('should render the header title', () => {
    render(<HeaderTitle />);

    const titleElement = screen.getByText('PokéAPI');
    expect(titleElement).toBeInTheDocument();
  });

  test('should render Grid, Box, and Typography components', () => {
    render(<HeaderTitle />);

    const gridElement = screen.getByTestId('header-title-grid');
    expect(gridElement).toBeInTheDocument();

    const titleElement = screen.getByText('PokéAPI');
    expect(titleElement.tagName).toBe('H6');

    expect(titleElement).toBeInTheDocument();
  });

  test('should have correct Grid item sizes', () => {
    const { container } = render(<HeaderTitle />);

    const gridItem = container.querySelector('.MuiGrid-item');
    expect(gridItem).toHaveClass('MuiGrid-grid-xs-4');
    expect(gridItem).toHaveClass('MuiGrid-grid-sm-4');
    expect(gridItem).toHaveClass('MuiGrid-grid-md-3');
    expect(gridItem).toHaveClass('MuiGrid-grid-lg-2');
  });
});
