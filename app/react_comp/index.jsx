/** @jsx React.DOM */

'use strict'

/* NPM require */

var GLOB = require('./glob');

var React = require('react');

var ReactRouter = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = ReactRouter;

/* Componentes */

var Log = require('./Log');
var App = require('./App');

/* Router test */
var H1 = require('./H1');
var Home = require('./Home');
var About = require('./About');

var routes = (
  <Route handler={H1} path="/">
    <DefaultRoute handler={Home} />
    <Route name="about" handler={About} />
  </Route>
);

ReactRouter.run(routes, function (Handler) {
  React.render(<Handler />, document.getElementById('router-test'));
});

React.render(<App />, document.getElementById('app') );
React.render(<Log />, document.getElementById('log') );
