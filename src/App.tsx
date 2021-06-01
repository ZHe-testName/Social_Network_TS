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

type MessageType = {
  // avaUrl: string,
  message: string,
  isUser: boolean,
};

type LinkType = {
  href: string,
  description: string,
};

type MainUserType = {
  name: string,
  surname: string,
  mainUserAvaUrl: string,
  newPostText: string,
  newMessageText: string,
};

type IdentLinkType = {
  href: string,
  description: string,
  id: string,
};

type FriendsCardsType = {
  avatar?: string,
  name: string,
  href: string,
};

type DialogsUsersType = {
  href: string,
  description: string,
  online: boolean,
  selected: boolean,
  avaUrl: string,
  messageArr: Array <MessageType>,
};

type PostsType = {
  text: string,
  likes: number,
  dislikes: number,
  id: string,
};

type TestMessageType = {
  messageTxt: string, 
  isUser: boolean,
  avaUrl: string,
  id: string,
};

type AppPropsType = {
  mainUser: MainUserType,
  usersConversation: Array <DialogsUsersType>,
  navLinks: Array<LinkType>,
  myPosts: Array<PostsType>,
  friendsAvatarCards: Array<FriendsCardsType>,
  testMessagesArr: Array<TestMessageType>,
  addPost: (postText: string | undefined) => void,
  sendMessage: (messageText: string | undefined) => void,
  textAreaOnChange: (text: string | undefined) => void,
  messageInputOnChange: (text: string | undefined) => void,
};

function App(props: AppPropsType) {

    const { mainUser,
            navLinks, 
            usersConversation, 
            myPosts,
            testMessagesArr, 
            friendsAvatarCards,
            addPost,
            sendMessage,
            textAreaOnChange,
            messageInputOnChange,} = props;

  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar {...{links: navLinks, friendsArr: friendsAvatarCards}}/>

        <div className="main-content">
          <Route path="/dialogs" render={() => <Dialogs
                                                      messages={testMessagesArr} 
                                                      mainUser={mainUser} 
                                                      users={usersConversation} 
                                                      sendMessage={sendMessage}
                                                      messageInputOnChange={messageInputOnChange}/>}/>
          <Route path="/news" component={News}/>
          <Route path="/settimgs" component={Settings}/>
          <Route path="/profile" render={() => <Profile 
                                                      mainUser={mainUser}   
                                                      posts={myPosts} 
                                                      addPost={addPost} 
                                                      textAreaOnChange={textAreaOnChange}/>}/>
          <Route path="/music" component={Music}/>
        </div>
      </div>
  );
}


export default App;
