import { createStore, combineReducers } from 'redux';
import { profileReducer } from './reducers/profile-reducer';
import { dialogsReducer } from './reducers/dialogs-reducer';
import { navbarReducer } from './reducers/navbar-reducer';
import { usersReducer } from './reducers/uders-reducer';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
});

const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>;

export default store;