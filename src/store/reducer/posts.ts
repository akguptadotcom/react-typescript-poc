import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/utility';

interface Posts {
  userId:number;
  id:number;
  title:number;
  body:number;
};
type PostsArray = Posts[]
const initialState={
  data:<PostsArray>[]
}

const fetchPostsSuccess = (state:any, action:any) => {
  // alert(action)
  return updateObject(state, {
    data:action.data
  });
}

const fetchPostsFail = (state:any, action:any) =>  {
  return {
    data:[]
  }
}

const reducer = (state=initialState, action:any)=>{
	switch (action.type){
		case actionTypes.FETCH_POSTS_SUCCESS: return fetchPostsSuccess(state, action)
    case actionTypes.FETCH_POSTS_FAIL: return fetchPostsFail(state, action)

    default: return state
	}
}

export default reducer;

