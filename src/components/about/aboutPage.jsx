"use strict";

var React = require('react');
var Link = require('react-router').Link;
var About = React.createClass({
    statics: {
        willTransitionTo: function(transition, params, query, callback) {
            if (!confirm('Are you sure?'))
                transition.abort();
            else 
                callback();
        }
    },
    render: function () {
        return (
            <div>
                <h1> About </h1>
                <p>
                    This app uses the following:
                    </p>
                <ul>
                    <li>React</li>
                    <li>Flux</li>
                    <li>Others</li>
                </ul>
                <button className="btn btn-large" >
                    <Link to="app">Learn More</Link>
                </button>
            </div>
        );
    }
});

module.exports = About;