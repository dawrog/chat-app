import { takeEvery } from "redux-saga/effects";
import * as types from "../constants/ActionTypes";

const handleNewsMessage = function* handleNewsMessage(params) {
	yield takeEvery(types.ADD_MESSAGE, (action) => {
		action.author = params.username;
		params.socket.send(JSON.stringify(action));
	});
};

export default handleNewsMessage;