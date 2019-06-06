import { call, put } from "redux-saga/effects";
import { get } from "../../utils/api";
import { receiveSeats, failedSeats } from "./actions"

export function* receiveSeatsList() {
  try {
    const response = yield call(
      get,
      `seats.json`,
    );
    const { data } = response;
    console.log(data);
    yield put(receiveSeats(data));
    console.log(response);
  } catch (error) {
    yield put(failedSeats())
  }
}