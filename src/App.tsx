import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import DialogsContainer from './components/dialogs/DialogsContainer';
import Music from './components/musik';
import Navbar from './components/navbar';
// import Profile from './components/profile';
import Settings from './components/settings';
import News from './components/news';
import { withRouter } from 'react-router-dom';

// import store from './redux/redux-store';
// import { MainUserType, PostsType } from './components/profile/Profile';
// import { DialogsPageType, DialogsUsersType, TestMessageType } from './redux/types';
// import { NavType } from './components/navbar/Navbar';
// import { UserObjType } from './redux/reducers/uders-reducer';
import UsersContainer from './components/users/UsersContainer';
import { UserType } from './redux/reducers/users-reducer';
import ProfileContainer from './components/profile/ProfileContainer';
import { ProfileUserType } from './redux/reducers/profile-reducer';
import { HeaderContainer } from './components/header/HeaderComponent';
import Login from './components/login/Login';
import React, { ComponentType } from 'react';
import { AppReducerStateType, initializeAppTC } from './redux/reducers/app-reducer';
import { getUserAuthDataThunkCreator } from './redux/reducers/auth-reducer';
import { compose } from 'redux';
import { connect, Provider } from 'react-redux';
import { AppStateType } from './redux/redux-store';
import Preloader from './components/preloader/Preloader';
import store from './redux/redux-store';
  
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
  isFollowing?: boolean,
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
export type MapDispatchPropsType = {
  initializeAppTC: () => void,
};

class App extends React.Component<MapDispatchPropsType & AppReducerStateType> {
  componentDidMount() {
    this.props.initializeAppTC();
  }

  render (){
    if (this.props.initialized){
        return (
          <div id='app' className='app-wrapper'>
            <HeaderContainer/>
            <Navbar />

            <div className="main-content">
              <Route path="/dialogs" render={() => <DialogsContainer/>}/>
              <Route path="/news" component={News}/>
              <Route path="/settimgs" component={Settings}/>
              {/* userId мы используем этот параметр для того чтобы система реакта
              сама прочитала его в адресной строке и withRouter закинул в пропсы компоненты
              нужный нам id 
              знак вопроса означаеть что параметр не обязателен
              чтобы мы могли отображать профайл с пустым id
              если там пусто то в объекте withRouter-a наш параметр будет underfined
              к этому нужно быть готовым*/}
              <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
              <Route path="/music" component={Music}/>
              <Route path="/users" render={() => <UsersContainer />}/>
              <Route path='/login' component={Login} />
          </div>
        </div>
      );
    };

    return <Preloader />;
  }
};

const mapStateToProps = (state: AppStateType): AppReducerStateType => ({
  initialized: state.app.initialized,
});  
//для нормальной работы роутов в нутри App
//результат connecta нужно обернуть в withRouter
//это какойто странный баг или особенность

//при работе с TypeScript в дженерик нужно пихать ComponentType из реакта
//иначе будет падать дурацкая ошибка
// export default
const AppContainer = compose<ComponentType>(
  withRouter,
  connect(mapStateToProps, {initializeAppTC})
)(App);

const AppWithRouter = (props: any) => {
  return <>
      <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider> 
      </BrowserRouter>
  </>
};

export default AppWithRouter;


