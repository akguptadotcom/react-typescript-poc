import React, { useEffect } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import { Route, Switch, Link } from 'react-router-dom';
import SinglePost from './SinglePost';

const Posts = (props: any) => {

  interface PostType {
    userId: number;
    id: number;
    title: number;
    body: number;
  }

  type SinglePost = PostType;

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/:id" component={SinglePost} />
      </Switch>
      <h1>My First TypeScript Posts</h1>
      <ul>
        {props.posts.length ? (
          props.posts.map((post: SinglePost) => (
            <li key={post.id}>
              <Link to={`/${post.id}`}>
                <h5>{post.title}</h5>
              </Link>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <li>No Posts Available</li>
        )}
      </ul>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts.data,
  };
};


export default connect(mapStateToProps, null)(Posts);
