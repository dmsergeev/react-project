"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes.jsx');
var AuthorActions = require('./actions/authorActions');

AuthorActions.initializeApp();

Router.run(routes, function (Handler) {
    React.render(<Handler />, document.getElementById('app'))
}); 