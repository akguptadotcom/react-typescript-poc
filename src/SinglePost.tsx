import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import { connect } from "react-redux";
import * as actions from "./store/actions";
import { Link } from 'react-router-dom';




const SignlePosts = (props: any) => {
  interface PostType {
    userId: number;
    id: number;
    title: number;
    body: number;
  }
  type SinglePost = PostType;
  const [post, setPost] = useState({
    userId: "",
    id: "",
    title: "",
    body: ""
  });

  useEffect(() => {
    if (props.posts && props.posts.length) {
      const index = props.posts.findIndex((post: SinglePost) => post.id == props.match.params.id);
      setPost(props.posts[index]);
    }
  }, [props.posts])



  return (
    <React.Fragment>
      <Link to="/">Home</Link>
      <h1>Single Post</h1>
      {post && (<React.Fragment>

        <h5>{post?.title}</h5>
        <p>{post?.body}</p>
      </React.Fragment>)}

    </React.Fragment>
  );
}

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts.data
  };
};



export default connect(mapStateToProps, null)(SignlePosts);
