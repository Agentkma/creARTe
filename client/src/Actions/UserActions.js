import { SELECTED_ART } from './types.js';

export const selectArt = ({ prop, value }) => ({
	type: SELECTED_ART,
	payload: { prop, value }
});
