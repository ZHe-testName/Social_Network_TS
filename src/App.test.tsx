import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import AppWithRouter from './App';
import ReactDOM from 'react-dom';

it('render with out crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppWithRouter />, div);
  ReactDOM.unmountComponentAtNode(div);
  // render(<AppWithRouter />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
