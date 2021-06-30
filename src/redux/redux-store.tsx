import { createStore, combineReducers } from 'redux';
import { profileReducer } from './reducers/profile-reducer';
import { dialogsReducer } from './reducers/dialogs-reducer';
import { navbarReducer } from './reducers/navbar-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer,
});

const store = createStore(reducers);

export default store;