import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Article from './';

describe('Testing the Footer Component', () => {
  test('renders the footer', () => {
    render(<Article />);

    let article = screen.getByTestId('article');
    let h3 = screen.getByTestId('article-h3');

    expect(article).toBeTruthy();
    expect(h3).toHaveTextContent('Code-Fellows 2022');
  })
});