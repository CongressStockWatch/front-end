import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from './';


describe('Testing the Footer Component', () => {
  test('renders the header', () => {
    render(<Header />);

    let button = screen.getByTestId('header');
  
    expect(button).toBeTruthy();
  })
});