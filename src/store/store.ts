import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import entriesReducer from './entriesSlice'
import createSagaMiddleware from "redux-saga";
import saga from "./sagas";

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: {
    entries: entriesReducer,
  },

  middleware
})

sagaMiddleware.run(saga);

export default store;