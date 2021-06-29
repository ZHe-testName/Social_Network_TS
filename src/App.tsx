import './App.css';
import {Route} from 'react-router-dom';

import Dialogs from './components/dialogs';
import Header from './components/header';
import Music from './components/musik';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Settings from './components/settings';
import News from './components/news';

import store from './redux/bll';
import { MainUserType, PostsType } from './components/profile/Profile';
import { DialogsPageType, TestMessageType } from './redux/types';
import { NavType } from './components/navbar/Navbar';
  
export type DispatchActionPropsType = {
  type: string,
  message?: string,
  id?: string,
  observerFunc?: () => void,
};

export type DialoglsReducerStateType = {
  messages: Array<TestMessageType>,
  newMessageText: string,
}; 

type ProfileDataType = {
  mainUser: MainUserType,
  posts: Array<PostsType>,
  newPostText: string,
};

export  type AppPropsType = {
  _state: {
    profilePage: ProfileDataType,
    dialogsPage: DialogsPageType,
    navBar: NavType,
  },
  
  getState: () => {
    profilePage: ProfileDataType,
    dialogsPage: DialogsPageType,
    navBar: NavType,
  },
}

function App(props: AppPropsType) {
  const dispatch = store.dispatch.bind(store);

    const { profilePage,
            dialogsPage,
            navBar} = props.getState();

  return (
      <div id='app' className='app-wrapper'>
        <Header/>
        <Navbar {...navBar}/>

        <div className="main-content">
          <Route path="/dialogs" render={() => <Dialogs
                                                      {...dialogsPage}
                                                      dispatch={dispatch}/>}/>
          <Route path="/news" component={News}/>
          <Route path="/settimgs" component={Settings}/>
          <Route path="/profile" render={() => <Profile 
                                                      {...profilePage} 
                                                      dispatch={dispatch}/>}/>
          <Route path="/music" component={Music}/>
        </div>
      </div>
  );
}


export default App;
