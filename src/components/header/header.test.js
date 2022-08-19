import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Article from './';

describe('Testing the Footer Component', () => {
  test('renders the header', () => {
    render(<Article />);

    let button = screen.getByTestId('button');
    let home = screen.getByTestId('home');
    let trading = screen.getByTestId('trading');
    let logout = screen.getByTestId('logout');

    expect(button).toBeTruthy();
    expect(home).toHaveTextContent('Home');
    expect(trading).toHaveTextContent('Trading');
    expect(logout).toHaveTextContent('Logout');
  })
});

