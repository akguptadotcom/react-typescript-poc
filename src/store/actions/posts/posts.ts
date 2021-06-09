import * as actionTypes from "../actionTypes";

export const fetchPosts = () =>{
  return {
    type:actionTypes.FETCH_POSTS
  }
}

export const fetchPostsSuccess = (data:any, message:string) =>{
  return {
    type:actionTypes.FETCH_POSTS_SUCCESS,
    data:data,
    message:message
  }
}

export const fetchPostsFail = (data:any, message:string) =>{
  return {
    type:actionTypes.FETCH_POSTS_FAIL,
    data:data,
    message:message
  }
}