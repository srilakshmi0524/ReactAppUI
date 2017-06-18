"use strict";
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;

var Routes = (
  <Route path="/" name="app" handler={require('./components/app')}>
    <DefaultRoute  handler={require('./components/HomePage')}/>
    <NotFoundRoute handler={require('./components/NotFoundPage')} />
  </Route>
);

module.exports = Routes;
