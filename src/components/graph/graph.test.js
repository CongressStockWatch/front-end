import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Graph from './index'

describe('Testing the Graph Component', () => {
  test('renders the footer', () => {
    render(<Graph/>);
    let chart = screen.getByTestId('container');
    expect(chart).toBeTruthy()
  })
});