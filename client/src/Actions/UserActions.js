import { SELECTED_ART } from './types.js';
import { USER_SIGN_IN } from './types.js';

export const selectArt = ({ prop, value }) => ({
	type: SELECTED_ART,
	payload: { prop, value }
});

export const signIn = ({ prop, value }) => ({
	type: USER_SIGN_IN,
	payload: { prop, value }
});
