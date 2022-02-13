import { CHANGE_SHOW_NAME } from './action';

const initialState = {
	name: 'Defult',
	showName: false,
};

export const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_SHOW_NAME: {
			return {
				...state,
				showName: !state.showName,
			};
		}
		default:
			return state;
	}
};
