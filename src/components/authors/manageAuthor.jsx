"use strict";

var React = require('react');
var AuthorForm = require('./authorForm.jsx');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var Router = require('react-router');
var toastr = require('toastr');

var ManageAuthor = React.createClass({
    mixins: [Router.Navigation],

    getInitialState: function() {
        return {
            author: {id: '', firstName: '', lastName: ''},
            errors: {},
            isDirty: false
        }
    },
    componentWillMount: function() {
        var authorId = this.props.params.id 
        if (authorId) {
            this.setState({author: AuthorStore.getAuthorById(authorId)})
        }        
    },
    statics: {
        willTransitionFrom: function (transition, component) {
        if (component.state.isDirty && !window.confirm('Navigate away?'))
            transition.abort();
    }},
    setAuthorState: function(event){
        this.setState({isDirty: true});
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        return this.setState({author: this.state.author});
    },
    saveAuthor: function(event) {
        event.preventDefault();
        if (!this.isInputValid()) return;
        AuthorActions.createAuthor(this.state.author);
        toastr.success('Author saved.');
        this.transitionTo('authors');
        this.setState({isDirty: false});        
    },
    isInputValid: function() {
        var isInputValid = true;
        this.state.errors = {};

        if (this.state.author.firstName.length < 3)
        {
            this.state.errors.firstName = 'First name must be at least 3 chars';
            isInputValid = false;
        }

        if (this.state.author.lastName.length < 3)
        {
            this.state.errors.lastName = 'Last name must be at least 3 chars';
            isInputValid = false;
        }
        this.setState({errors: this.state.errors});
        return isInputValid;        
    },
    render: function () {
        return (
            <div>
                <AuthorForm 
                 author={this.state.author}
                 onChange={this.setAuthorState} 
                 saveAuthor={this.saveAuthor}
                 errors={this.state.errors}/>
            </div>
        )
    }
});

module.exports = ManageAuthor;