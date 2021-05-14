// import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import Dialogs from './components/dialogs';
import Header from './components/header';
import Music from './components/musik';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Settings from './components/settings';
import News from './components/news';

type LinkType = {
  href: string,
  description: string,
};

type IdentLinkType = {
  href: string,
  description: string,
  id: string,
};

type DialogsUsersType = {
  href: string,
  description: string,
  online: boolean,
};

type AppPropsType = {
  usersConversation: Array<DialogsUsersType>,
  navLinks: Array<LinkType>,
};

function App(props: AppPropsType) {
  
  const {navLinks, usersConversation} = props;

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header/>
        <Navbar links={navLinks}/>

        <div className="main-content">
          <Route path="/dialogs" render={() => <Dialogs users={usersConversation}/>}/>
          <Route path="/news" component={News}/>
          <Route path="/settimgs" component={Settings}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/music" component={Music}/>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
