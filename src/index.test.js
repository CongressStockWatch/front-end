import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './';


describe('Testing the Footer Component', () => {
  test('renders the header', () => {
    render(<App />);

    let button = screen.getByTestId('header');
    let container = screen.getByTestId('form-div');
  

    expect(button).toBeTruthy();  
    expect(container).toBeTruthy();
  })
});