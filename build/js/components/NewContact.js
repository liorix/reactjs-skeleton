import React from 'react';
import Router from 'react-router';
import ContactStore from '../stores/ContactStore';

var Link = Router.Link;

var NewContact = React.createClass({displayName: "NewContact",

    mixins: [ Router.Navigation ],

    createContact: function (event) {
        event.preventDefault();
        ContactStore.addContact({
            first: this.refs.first.getDOMNode().value,
            last: this.refs.last.getDOMNode().value
        }, function (contact) {
            this.transitionTo('contact', { id: contact.id });
        }.bind(this));
    },

    render: function () {
        return (
            React.createElement("form", {onSubmit: this.createContact}, 
                React.createElement("p", null, 
                    React.createElement("input", {type: "text", ref: "first", placeholder: "First name"}), 
                    React.createElement("input", {type: "text", ref: "last", placeholder: "Last name"})
                ), 
                React.createElement("p", null, 
                    React.createElement("button", {type: "submit"}, "Save"), " ", React.createElement(Link, {to: "/"}, "Cancel")
                )
            )
        );
    }
});

export default NewContact;