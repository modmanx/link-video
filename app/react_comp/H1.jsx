/** @jsx React.DOM */

'use strict'

var React = require('react')
var ReactRouter = require('react-router');
var { Route, RouteHandler, Link, DefaultRoute } = ReactRouter;

module.exports = React.createClass({
    displayName: 'H1React',
    render : function(){
      return <div>
        <RouteHandler/>
      </div>;
    }
})
