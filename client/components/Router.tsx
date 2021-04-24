import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MovieList from '../MovieListPage/MovieList';
import Movie from '../MovieListPage/Movie';
import Login from '../LoginPage/Login';
import SignUp from '../SignUpPage/SignUp';

const Router: React.FC = () => (
  <Switch>
    <Route exact path="/">
      <MovieList />
    </Route>
    <Route path="/movies/:id">
      <Movie />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/signup">
      <SignUp />
    </Route>
  </Switch>
);

export default Router;
