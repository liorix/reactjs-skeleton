import React from 'react';
import Router from 'react-router';
import ContactStore from '../stores/ContactStore';

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Contact = React.createClass({

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
        var contact_id = this.getParams().id;
        return (
            <div className="Contact">
                <img height="50" src={avatar} key={avatar}/>
                <h3>{name}</h3>
                <button onClick={this.destroy}>Delete</button>
                <Link to="details" params={{id: contact_id}}>Details</Link>
                <div>
                    <RouteHandler/>
                </div>
            </div>

        );
    }
});

export default Contact;