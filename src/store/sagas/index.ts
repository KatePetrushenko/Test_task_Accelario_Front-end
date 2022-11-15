import { call, all } from "redux-saga/effects";
import * as entriesSaga from "./entriesSaga";

export default function* rootSaga() {
  yield all([
    call(entriesSaga.fetchDataSaga),
  ]);
}
