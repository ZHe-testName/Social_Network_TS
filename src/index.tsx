import React from 'react';
import ReactDOM from 'react-dom';
import App, { ProfileDataType } from './App';
import store from './redux/redux-store';

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { DialogsPageType } from './redux/types';
import { NavType } from './components/navbar/Navbar';

export type EntireTreePropsType = {
  state: {
    profilePage: ProfileDataType,
    dialogsPage: DialogsPageType,
    navBar: NavType,
  },
};

export const rerenderEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={store.getState()} getState={store.getState} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
  };

rerenderEntireTree();

store.subscribe(rerenderEntireTree);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
