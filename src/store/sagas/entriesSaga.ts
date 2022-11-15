import { call, takeEvery, put } from "redux-saga/effects";
import Axios from "axios";
import { getEntries } from "../entriesSlice";
import { sagaActions } from "../sagaActions";
import { IResponseGenerator } from '../../types'

let callAPI = async ({ url, method, data }: any) => {
  return await Axios({
    url,
    method,
    data
  });
};

export function* getEntriesSaga() {
  try {
    let result: IResponseGenerator = yield call(() =>
      callAPI({ url: "https://api.publicapis.org/entries", metod: 'GET' })
    );
    yield put(getEntries(result.data));
  } catch (e) {
    yield put({ type: "TODO_FETCH_FAILED" });
  }
}

export function* fetchDataSaga() {
  yield takeEvery(sagaActions.GET_ENTRIES, getEntriesSaga);
}