import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import dataObject from './redux/bll';

export const rerenderEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App {...dataObject} />
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };