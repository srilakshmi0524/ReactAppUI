"use strict";
var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function(){
    return (
      <div>
        <div className="container-fluid">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App;
