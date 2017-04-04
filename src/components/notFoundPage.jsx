"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function () {
        return (
        <div className="container">
            <div className="row">
                <div className="error-template">
                    <h1>Oops!</h1>
                    <h2>404 Not Found</h2>
                    <div className="error-details">
                        Sorry, an error has occured, Requested page not found!<br />
                    </div>
                    <div className="error-actions">
                        <Link to="app" className="btn btn-primary">
                            <i className="icon-home icon-white" /> Take Me Home </Link>
                    </div>
                </div>
            </div>
        </div>
        );
    }
});

module.exports = NotFoundPage;