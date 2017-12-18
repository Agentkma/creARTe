import { combineReducers } from 'redux';
import UserActionReducer from './UserActionsReducer.js';

export default combineReducers({
	user: UserActionReducer
});
