import { put, take, call, all, takeLatest } from "redux-saga/effects"
import { actionTypes, changeMap, lost, win } from "./actions";
import { eventChannel } from "redux-saga";

let socket;
function* openCellSaga(action) {
	yield socket.send(`open ${action.payload.columnNumber} ${action.payload.rowNumber}`);
	yield socket.send('map');
}

function* chooseLevelSaga(action) {
	yield socket.send("new " + action.payload.newLevel);
	yield socket.send("map");
}

function* startGameSaga() {
	let channel = yield call(createWebSocket);
	while (true) {
		const newAction = yield take(channel);
		yield put(newAction)
	}
}

function createWebSocket() {
	return eventChannel(em => {
		let ws = new WebSocket('wss://hometask.eg1236.com/game1/');
		socket = ws;
		ws.onmessage = (e) => {
			let [start, end] = e.data.split(":");
			if(start === "map") {
				let data = e.data.substring(5);
				data = data.replace(/\s/g, '');
				return em(changeMap(data));
			}  if (start === "open" ) {
				if(end === " You lose") {
					return em(lost())
				}
			} if (start === "open" ) {
				if( end === " You win. The password for this level is")
				return em(win())
			}
			return null
		}
		return () => {
			console.log("socket has unsubscribed")
		}
	})
}

export default function* rootSaga() {
	yield all([takeLatest(actionTypes.START_GAME, startGameSaga), takeLatest(actionTypes.CHANGE_LEVEL, chooseLevelSaga),
		takeLatest(actionTypes.OPEN_CELL, openCellSaga)])
}