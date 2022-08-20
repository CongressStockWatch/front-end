import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Table from '../../App';


describe('Testing the Footer Component', () => {
  test('renders the header', () => {
    render(<Table />);

    let container = screen.getByTestId('Table');
  
    expect(container).toBeTruthy();
  })
});