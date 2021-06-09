import { takeEvery, all, takeLatest, take } from "redux-saga/effects";
// import { saveCustomerBasicInfo } from '../actions';
import * as actionTypes from "../actions/actionTypes";
import {liPlaidGetLinkTokenSaga} from "./post/post";

export function* watchPostSaga() {
  // alert("test");
  yield all([
    takeEvery(actionTypes.FETCH_POSTS, liPlaidGetLinkTokenSaga)
    
  ]);
}