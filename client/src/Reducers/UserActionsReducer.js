import { SELECTED_ART } from '../Actions/types.js';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SELECTED_ART:
			return action.payload;

		default:
			return state;
	}
};
