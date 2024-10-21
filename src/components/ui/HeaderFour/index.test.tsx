import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { HeaderFour } from '.';

describe('BodySmall Component', () => {
  const id = 'test-id';
  const text = 'This is a test text';

  it('should render the text passed as props', () => {
    render(<HeaderFour id={id} text={text} />);

    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  });

  it('should have the correct id', () => {
    render(<HeaderFour id={id} text={text} />);

    const textElement = screen.getByText(text);
    expect(textElement).toHaveAttribute('id', id);
  });

  it('should have the correct variant', () => {
    render(<HeaderFour id={id} text={text} />);

    const textElement = screen.getByText(text);
    expect(textElement).toHaveClass('MuiTypography-h4');
  });
});
