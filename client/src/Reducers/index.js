import { combineReducers } from 'redux';
import UserActionReducer from './UserActionsReducer.js';
import AuthReducer from './AuthReducer.js';

export default combineReducers({
	user: UserActionReducer,
	auth: AuthReducer
});
