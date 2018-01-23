import { SELECTED_ART, USER_SIGN_IN } from '../Actions/types.js';

const INITIAL_STATE = {
	username: 'Sign In'
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SELECTED_ART:
			return action.payload;
		case USER_SIGN_IN:
			return { ...state, user: action.payload };
		default:
			return state;
	}
};
