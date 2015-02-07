/* jshint -W030 */
'use strict';

import bootstrap from 'bootstrap';
import React from 'react';
import App from './components/App';
import Index from './components/Index';
import Contact from './components/Contact';
import NewContact from './components/NewContact';
import ContactDetails from './components/ContactDetails';
import NotFound from './components/NotFound';

import Router from 'react-router';

var {
    Route,
    DefaultRoute,
    NotFoundRoute,
    RouteHandler,
    Link
    } = Router;

var routes = (
    React.createElement(Route, {handler: App}, 
        React.createElement(DefaultRoute, {handler: Index}), 
        React.createElement(Route, {name: "new", path: "contact/new", handler: NewContact}), 
        React.createElement(Route, {name: "contact", path: "contact/:id", handler: Contact}, 
            React.createElement(Route, {name: "details", path: "details", handler: ContactDetails})
        ), 
        React.createElement(NotFoundRoute, {handler: NotFound})
    )
);

Router.run(routes, function (Handler) {
    React.render(React.createElement(Handler, null), document.getElementById('app'));
});

/*React.render(<Feed />, document.getElementById('app'));*/
