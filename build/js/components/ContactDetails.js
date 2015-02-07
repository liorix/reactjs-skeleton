import React from 'react';
import Router from 'react-router';
import ContactStore from '../stores/ContactStore';

var ContactDetails = React.createClass({displayName: "ContactDetails",

    mixins: [ Router.Navigation, Router.State ],

    getStateFromStore: function (id) {
        id = this.getParams().id;
        return {
            contact: ContactStore.getContact(id)
        };
    },

    getInitialState: function () {
        return this.getStateFromStore();
    },

    componentDidMount: function () {
        ContactStore.addChangeListener(this.updateContact);
    },

    componentWillUnmount: function () {
        ContactStore.removeChangeListener(this.updateContact);
    },

    componentWillReceiveProps: function () {
        this.setState(this.getStateFromStore());
    },

    updateContact: function () {
        if (!this.isMounted())
            return;

        this.setState(this.getStateFromStore());
    },

    destroy: function () {
        var id = this.getParams().id;
        ContactStore.removeContact(id);
        this.transitionTo('/');
    },

    render: function () {
        var contact = this.state.contact || {};
        var name = contact.first + ' ' + contact.last;
        var avatar = contact.avatar || 'http://placecage.com/50/50';
        return (
            React.createElement("div", null, 
                "I'm the contact details view!"
            )
        );
    }
});

export default ContactDetails;