import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Login from './';


describe('Testing the Footer Component', () => {
  test('renders the header', () => {
    render(<Login />);

    let button = screen.getByTestId('form-text');
    let container = screen.getByTestId('form-div');
  
  
  
    
    expect(button).toBeTruthy();  
    expect(container).toBeTruthy();
  })
});