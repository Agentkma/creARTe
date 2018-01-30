import {
	EMAIL_CHANGED,
	PASSWORD_CHANGED,
	USER_LOGIN_SUCCESS,
	USER_LOGIN_FAIL,
	USER_LOGIN,
	USER_AUTH_GOOGLE_SUCCESS,
	SIGN_OUT_GOOGLE
} from '../Actions/types.js';

const INITIAL_STATE = {
	email: '',
	password: '',
	user: null,
	userName: '',
	error: '',
	loading: false
};

// return: new object with all state key/vals & add new email: action.payload key/val pair
// must return new object or Redux will not see/recognize a change

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case EMAIL_CHANGED:
			return { ...state, email: action.payload };
		case PASSWORD_CHANGED:
			return { ...state, password: action.payload };
		case USER_LOGIN:
			return { ...state, loading: true, error: '' };
		case USER_LOGIN_SUCCESS:
			return {
				...state,
				...INITIAL_STATE,
				user: action.payload
			};
		case USER_AUTH_GOOGLE_SUCCESS:
			return {
				...state,
				...INITIAL_STATE,
				userName: action.payload
			};
		case SIGN_OUT_GOOGLE:
			return {
				...state,
				...INITIAL_STATE,
				user: null
			};
		case USER_LOGIN_FAIL:
			return {
				...state,
				error: 'Authentication Failed',
				password: '',
				loading: false
			};
		default:
			return state;
	}
};
