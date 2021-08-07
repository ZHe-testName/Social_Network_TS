import { createStore, combineReducers } from 'redux';
import { profileReducer } from './reducers/profile-reducer';
import { dialogsReducer } from './reducers/dialogs-reducer';
import { navbarReducer } from './reducers/navbar-reducer';
import { usersReducer } from './reducers/uders-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
});

const store = createStore(reducers);

export default store;