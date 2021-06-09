import { put, delay, call } from 'redux-saga/effects';
import axios from "../../../axios";
import * as actions from "../../actions";

// type successResponse=any
// type faildResponse=any
export function* liPlaidGetLinkTokenSaga(action:any):Generator<any, any>{
  try{
    const response:any = yield axios({
      url:'/posts'
    });
    console.log(response.data)
    yield put(
      actions.fetchPostsSuccess(
        response.data,
        'Data fetched Successfully'
      )
    );
  } catch(error){
      if (error.response || error.message) {
        console.log(error.message);
        
        yield put(
          actions.fetchPostsFail(
            400,
            error.message ? error.message : error.message
          )
        );
      }
  }
}