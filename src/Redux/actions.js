export const actionTypes = {
	START_GAME : 'START_GAME',
	CHANGE_LEVEL: 'CHANGE_LEVEL',
	CHANGE_MAP : 'CHANGE_MAP',
	LOSE_GAME : 'LOSE_GAME',
	WIN_GAME : 'WIN_GAME',
	OPEN_CELL : 'OPEN_CELL'
}

export const open = (address) =>{
	return{
		type: actionTypes.OPEN_CELL,
		payload: address
	}
}
export const start = () => {
	return {
		type: actionTypes.START_GAME
	}
}
export const changeLevel = (newInfo) => {
	return {
		type: actionTypes.CHANGE_LEVEL,
		payload: newInfo
	}
}

export const changeMap = (newMap) => {
	return {
		type : actionTypes.CHANGE_MAP,
		payload: newMap
	}
}

export const lost = () => {
	return {
		type : actionTypes.LOSE_GAME
	}
}

export const win = () => {
	return {
		type : actionTypes.WIN_GAME
	}
}