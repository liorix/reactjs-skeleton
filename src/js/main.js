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
    <Route handler={App}>
        <DefaultRoute handler={Index}/>
        <Route name="new" path="contact/new" handler={NewContact}/>
        <Route name="contact" path="contact/:id" handler={Contact}>
            <Route name="details" path="details" handler={ContactDetails}/>
        </Route>
        <NotFoundRoute handler={NotFound}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});

/*React.render(<Feed />, document.getElementById('app'));*/
