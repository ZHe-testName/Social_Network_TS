import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const navLinks = [
  {href: '/dialogs', description: 'Messages'},
  {href: '/news', description: 'News'},
  {href: '/settimgs', description: 'Settings'},
  {href: '/profile', description: 'Profile'},
  {href: '/music', description: 'Music'},
];

const usersConversation = [
  {href: '/dialogs/vasya', description: 'Vasya', online: true,},
  {href: '/dialogs/masha', description: 'Masha', online: true,},
  {href: '/dialogs/vietal', description: 'Vietal', online: false,},
  {href: '/dialogs/somya', description: 'Sonya', online: false,},
  {href: '/dialogs/lena', description: 'Lena', online: true,},
];

const myPosts = [
  {text: 'Blablabla my post yo!', likes: 21, dislikes: 10}
];

const dataObject = {
  usersConversation,
  navLinks,
};

ReactDOM.render(
  <React.StrictMode>
    <App {...dataObject} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
