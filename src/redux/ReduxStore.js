import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sideBarReducer from './sideBarReducer';
import {usersReducer} from './usersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {composeWithDevTools} from 'redux-devtools-extension';
import appReducer from './appReducer';
import friendsReducer from './friendsReducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
    friendsPage:friendsReducer
})


// создалили стор!
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));
window.store = store;

export default store;