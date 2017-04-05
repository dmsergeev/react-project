"use strict";

var React = require('react');
var TextInput = require('../common/textInput.jsx');


var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        saveAuthor: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function () {
        return (
            <form>
                 <TextInput name="firstName"
                    label="First Name"
                    onChange={this.props.onChange}
                    value={this.props.author.firstName}
                    error={this.props.errors.firstName} />
                <br />
                 <TextInput name="lastName"
                    label="Last Name"
                    onChange={this.props.onChange}
                    value={this.props.author.lastName}
                    error={this.props.errors.lastName} />
                <br />

                <input type="submit" value="Save" className="btn btn-default" onClick={this.props.saveAuthor} />
            </form>
        )
    }
});

module.exports = AuthorForm;