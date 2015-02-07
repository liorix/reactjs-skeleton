import React from 'react';
import Router from 'react-router';
import ContactStore from '../stores/ContactStore';

var Link = Router.Link;

var NewContact = React.createClass({

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
            <form onSubmit={this.createContact}>
                <p>
                    <input type="text" ref="first" placeholder="First name"/>
                    <input type="text" ref="last" placeholder="Last name"/>
                </p>
                <p>
                    <button type="submit">Save</button> <Link to="/">Cancel</Link>
                </p>
            </form>
        );
    }
});

export default NewContact;