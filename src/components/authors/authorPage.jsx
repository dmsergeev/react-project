"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var Link = require('react-router').Link;

var AuthorList = require('./authorList.jsx');

var AuthorPage = React.createClass({

    getInitialState: function () {
        return {
            authors: []
        };
    },
    componentDidMount: function () {
        if (this.isMounted) {
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="manageAuthor" className="btn btn-primary">Manage Authors</Link>
                {<AuthorList authors={this.state.authors} />}
            </div>
        )
    }
});

module.exports = AuthorPage;