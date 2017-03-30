"use strict";

var React = require('react');
var About = React.createClass({
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
            </div>
        );
    }
});

module.exports = About;