import React from 'react';
import Router from 'react-router';
import ContactStore from '../stores/ContactStore';
import Header from './Header';

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
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
            return <li key={contact.id}><Link to="contact" params={contact}>{contact.first}</Link></li>;
        });
        return (
            <div>
                <Header/>
                <div className="App">

                    <div className="ContactList">
                        <Link to="new">New Contact</Link>
                        <ul>
                {contacts}
                        </ul>
                        <Link to="/nothing-here">Invalid Link (not found)</Link>
                    </div>
                    <div className="Content">
                        <RouteHandler/>
                    </div>
                </div>
            </div>
        );
    }
});

export default App;
