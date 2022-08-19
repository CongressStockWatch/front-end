import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Counter from './';

// TODO: TEST FILE FOR REFERENCE, STILL NEEDS TO BE CHANGED TO ACTUALLY TEST OUR OWN FILE

describe('Hooks Tests',  () => {
  test('Can handle values', () => {
    render(<Counter />);

    const button = screen.getByText('Update Clicks');

    const counter = screen.getByTestId('counter');
    const factor = screen.getByTestId('factor');

    fireEvent.click(button);

    expect(counter).toHaveTextContent(1);
    expect(factor).toHaveTextContent('false');
  });

  test('Can handle names', () => {
    render(<Counter />);

    const button = screen.getByText('Update Clicks');

    const counter = screen.getByTestId('counter');
    const factor = screen.getByTestId('factor');

    expect(counter).toHaveTextContent(0);
    expect(factor).toHaveTextContent('false');
    for (let i = 1; i < 42; i++){
      fireEvent.click(button);
      expect(counter).toHaveTextContent(`Button has been clicked ${i} time(s)`);
      let expectedValue = i % 5 ? false : true;
      expect(factor).toHaveTextContent(expectedValue);
    }
  });
});