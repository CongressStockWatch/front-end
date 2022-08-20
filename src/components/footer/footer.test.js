import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './index'

describe('Testing the Footer Component', () => {
  test('renders the footer', () => {
    render(<Footer />);
    let article = screen.getByTestId('Footer');
    expect(article).toBeTruthy()
  })
});