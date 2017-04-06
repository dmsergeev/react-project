"use strict";

var React = require('react');
var AuthorStore = require('../../stores/authorStore');
var Link = require('react-router').Link;

var AuthorList = require('./authorList.jsx');

var AuthorPage = React.createClass({

    getInitialState: function () {
        return {
            authors: AuthorStore.getAllAuthors()
        };
    },
    componentWillMount: function() {
        AuthorStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function(){
        AuthorStore.removeChangeListener(this._onChange);
    },
    _onChange: function(){
        this.setState({authors: AuthorStore.getAllAuthors()});
    },

    render: function () {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-primary">Manage Authors</Link>
                {<AuthorList authors={this.state.authors} />}
            </div>
        )
    }
});

module.exports = AuthorPage;