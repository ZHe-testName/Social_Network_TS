import './App.css';
import {Route} from 'react-router-dom';

import DialogsContainer from './components/dialogs/DialogsContainer';
import Music from './components/musik';
import Navbar from './components/navbar';
// import Profile from './components/profile';
import Settings from './components/settings';
import News from './components/news';

// import store from './redux/redux-store';
// import { MainUserType, PostsType } from './components/profile/Profile';
// import { DialogsPageType, DialogsUsersType, TestMessageType } from './redux/types';
// import { NavType } from './components/navbar/Navbar';
import store from './redux/bll';
// import { UserObjType } from './redux/reducers/uders-reducer';
import UsersContainer from './components/users/UsersContainer';
import { UserType } from './redux/reducers/uders-reducer';
import ProfileContainer from './components/profile/ProfileContainer';
import { ProfileUserType } from './redux/reducers/profile-reducer';
import { HeaderContainer } from './components/header/HeaderComponent';
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
  isFetching?: boolean,
};

export type DispatchProfileUserActionType = {
  type: string,
  message?: string,
  userProfile?: ProfileUserType,
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
  const {navBar} = store.getState();

  return (
      <div id='app' className='app-wrapper'>
        <HeaderContainer/>
        <Navbar {...navBar}/>

        <div className="main-content">
          <Route path="/dialogs" render={() => <DialogsContainer/>}/>
          <Route path="/news" component={News}/>
          <Route path="/settimgs" component={Settings}/>
          {/* userId мы используем этот параметр для того чтобы система реакта
          сама прочитала его в адресной строке и withRouter закинул в пропсы компоненты
          нужный нам id 
          знак вопроса означаеть что параметр не обязателен
          чтобы мы могли отображать профайл с пустым id
          если там пусто то в объекте withRouter -a наш параметр будет underfined
          к этому нужно быть готовым*/}
          <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
          <Route path="/music" component={Music}/>
          <Route path="/users" render={() => <UsersContainer />}/>
        </div>
      </div>
  );
}


export default App;
