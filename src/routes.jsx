"use strict";

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
    <Route name="app" path="/" handler={require('./components/app.jsx')}>
        <DefaultRoute handler={require('./components/homepage.jsx')} />
        <Route name="authors" handler={require('./components/authors/authorPage.jsx')} />
        <Route name="about" handler={require('./components/about/aboutPage.jsx')} />
        <Route name="manageAuthor" handler={require('./components/authors/manageAuthor.jsx')} />
        <NotFoundRoute handler={require('./components/notFoundPage.jsx')} />
    </Route>
);

module.exports = routes;