import { combineReducers } from 'redux';
import { createStore } from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
