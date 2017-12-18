import { combineReducers } from 'redux';
import UserActionReducer from './UserActionReducer.js';

export default combineReducers({
	user: UserActionReducer
});
