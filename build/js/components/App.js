import React from 'react';
import Router from 'react-router';
import ContactStore from '../stores/ContactStore';
import Header from './Header';

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({displayName: "App",
    getInitialState: function () {
        return {
            contacts: ContactStore.getContacts(),
            loading: true
        };
    },

    componentWillMount: function () {
        ContactStore.init();
    },

    componentDidMount: function () {
        ContactStore.addChangeListener(this.updateContacts);
    },

    componentWillUnmount: function () {
        ContactStore.removeChangeListener(this.updateContacts);
    },

    updateContacts: function () {
        if (!this.isMounted())
            return;

        this.setState({
            contacts: ContactStore.getContacts(),
            loading: false
        });
    },

    render: function () {
        var contacts = this.state.contacts.map(function (contact) {
            return React.createElement("li", {key: contact.id}, React.createElement(Link, {to: "contact", params: contact}, contact.first));
        });
        return (
            React.createElement("div", null, 
                React.createElement(Header, null), 
                React.createElement("div", {className: "App"}, 

                    React.createElement("div", {className: "ContactList"}, 
                        React.createElement(Link, {to: "new"}, "New Contact"), 
                        React.createElement("ul", null, 
                contacts
                        ), 
                        React.createElement(Link, {to: "/nothing-here"}, "Invalid Link (not found)")
                    ), 
                    React.createElement("div", {className: "Content"}, 
                        React.createElement(RouteHandler, null)
                    )
                )
            )
        );
    }
});

export default App;
