import './App.css';
import {Route} from 'react-router-dom';

import DialogsContainer from './components/dialogs/DialogsContainer';
import Header from './components/header';
import Music from './components/musik';
import Navbar from './components/navbar';
import Profile from './components/profile';
import Settings from './components/settings';
import News from './components/news';

// import store from './redux/redux-store';
import { MainUserType, PostsType } from './components/profile/Profile';
// import { DialogsPageType, DialogsUsersType, TestMessageType } from './redux/types';
// import { NavType } from './components/navbar/Navbar';
import store from './redux/bll';
// import { UserObjType } from './redux/reducers/uders-reducer';
import UsersContainer from './components/users/UsersContainer';
import { UserType } from './redux/reducers/uders-reducer';
// import { AppStateType } from './redux/redux-store';
  
export type DispatchActionPropsType = {
  type: string,
  message?: string,
  id?: string,
  observerFunc?: () => void,
};

export type DispatchUsersActionType = {
  type: string,
  userId?: number,
  users?: Array<UserType>,
  currenPage?: number,
  totalUsersCount?: number,
};

export type ProfileDataType = {
  mainUser: MainUserType,
  posts: Array<PostsType>,
  newPostText: string,
};

// export type DialoglsDataType = {
//   messages: Array<MessageType>,
//   newMessageText: string,
//   users: Array <UsersType>,
// };
// type AppPropsType = {
//   state: {
//     profilePage: ProfileDataType,
//     dialogsPage: DialogsPageType,
//     navBar: NavType,
//   },
  
//   getState: () => {
//     profilePage: ProfileDataType,
//     dialogsPage: DialogsPageType,
//     navBar: NavType,
//   },

//   dispatch: (action: DispatchActionPropsType) => void;
// }

// {...dialogsPage}
// dispatch={dispatch}
function App() {
  const { profilePage,
          navBar} = store.getState();

  return (
      <div id='app' className='app-wrapper'>
        <Header/>
        <Navbar {...navBar}/>

        <div className="main-content">
          <Route path="/dialogs" render={() => <DialogsContainer/>}/>
          <Route path="/news" component={News}/>
          <Route path="/settimgs" component={Settings}/>
          <Route path="/profile" render={() => <Profile 
                                                      mainUser={profilePage.mainUser} />}/>
          <Route path="/music" component={Music}/>
          <Route path="/users" render={() => <UsersContainer />}/>
        </div>
      </div>
  );
}


export default App;
