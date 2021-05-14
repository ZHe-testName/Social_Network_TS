// import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

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

type PostsType = {
  text: string,
  likes: number,
  dislikes: number,
  id: string,
};

type AppPropsType = {
  usersConversation: Array<DialogsUsersType>,
  navLinks: Array<LinkType>,
  myPosts: Array<PostsType>,
};

function App(props: AppPropsType) {

    const {navLinks, usersConversation, myPosts} = props;

  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar links={navLinks}/>

        <div className="main-content">
          <Route path="/dialogs" render={() => <Dialogs users={usersConversation}/>}/>
          <Route path="/news" component={News}/>
          <Route path="/settimgs" component={Settings}/>
          <Route path="/profile" render={() => <Profile posts={myPosts}/>}/>
          <Route path="/music" component={Music}/>
        </div>
      </div>
  );
}


export default App;
