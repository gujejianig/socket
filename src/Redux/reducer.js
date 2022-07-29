import { actionTypes } from "./actions";

export const reducer = (state, action) => {
	switch (action.type) {
		case(actionTypes.CHANGE_LEVEL):
			return {
				...state,
				level: action.payload.newLevel,
				rows: action.payload.newRow,
				columns: action.payload.newColumn,
				map: "",
				lost: false,
				won: false
			}
		case(actionTypes.CHANGE_MAP):
			return {
				...state,
				map: action.payload
			}
		case(actionTypes.LOSE_GAME):
			return {
				...state,
				lost: true
			}
		case(actionTypes.WIN_GAME):
			return {
				...state,
				won: true
			}
		default:
			return state
	}
}