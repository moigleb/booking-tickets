import { all, takeLatest } from "redux-saga/effects";
import { receiveSeatsList } from "../../containers/Seats/saga";
import { REQUEST_SEATS } from "../../containers/Seats/constants";


export default function* rootSaga() {
  yield all([
    takeLatest(REQUEST_SEATS, receiveSeatsList),
  ]);
}
