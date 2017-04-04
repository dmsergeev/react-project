"use strict";

var React = require('react');
var TextInput = require('../common/textInput.jsx');


var AuthorForm = React.createClass({
    render: function () {
        return (
            <form>
                 <TextInput name="firstName"
                    label="First Name"
                    onChange={this.props.onChange}
                    value={this.props.author.firstName} />
                <br />
                 <TextInput name="lastName"
                    label="Last Name"
                    onChange={this.props.onChange}
                    value={this.props.author.lastName} />
                <br />

                <input type="submit" value="Save" className="btn btn-default" />
            </form>
        )
    }
});

module.exports = AuthorForm;