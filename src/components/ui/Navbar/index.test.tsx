import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Navbar } from '../Navbar';

jest.mock('../HeaderTitle', () => ({
  HeaderTitle: () => <div>Mocked Header Title</div>
}));

jest.mock('../SearchComponent', () => ({
  SearchComponent: () => <div>Mocked Search Component</div>
}));

describe('Navbar Component', () => {
  it('should render HeaderTitle and SearchComponent', () => {
    render(<Navbar />);

    const headerTitleElement = screen.getByText('Mocked Header Title');
    const searchComponentElement = screen.getByText('Mocked Search Component');

    expect(headerTitleElement).toBeInTheDocument();
    expect(searchComponentElement).toBeInTheDocument();
  });
});
