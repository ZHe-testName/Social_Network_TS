import { createStore, combineReducers, applyMiddleware } from 'redux';
import { profileReducer } from './reducers/profile-reducer';
import { dialogsReducer } from './reducers/dialogs-reducer';
import { navbarReducer } from './reducers/navbar-reducer';
import { usersReducer } from './reducers/uders-reducer';
import { authReducer } from './reducers/auth-reducer';
import  thunk from 'redux-thunk';

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navBar: navbarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

//applyMiddleware это фуукция котрая помагает внедрять в наш конвеер информции
//промежуточные слои как например санки
//но это не сами санки а только слой
//санки мы сами создаем
const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>;

export default store;

//@ts-ignore
window.store = store;