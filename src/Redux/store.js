import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore, } from 'redux';
import rootSaga from "./saga";
import { reducer } from "./reducer";
import createSagaMiddleware from 'redux-saga';
const initialState = {
	level: 0,
	rows: 0,
	columns:0,
	map : "",
	lost : false,
	won: false
}
const middleWare = createSagaMiddleware();

export const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(middleWare)));
middleWare.run(rootSaga);