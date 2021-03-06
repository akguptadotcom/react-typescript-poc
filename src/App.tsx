import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import * as actions from './store/actions';
import { Route, Switch, Link } from 'react-router-dom';
import SinglePost from './SinglePost';
import Posts from "./Posts";

const App = (props: any) => {
  useEffect(() => {
    props.fetchPosts();
  }, []);

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
        <Route exact path="/" component={Posts} />
      </Switch>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts.data,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPosts: () => dispatch(actions.fetchPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
