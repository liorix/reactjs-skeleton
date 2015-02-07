import React from 'react';
import ReactBootstrap from 'react-bootstrap';

var {
    Navbar,
    Nav,
    NavItem,
    DropdownButton,
    MenuItem,
    } = ReactBootstrap;

var Header = React.createClass({displayName: "Header",
    render: function () {
        return (
            React.createElement(Navbar, null, 
                React.createElement(Nav, null, 
                    React.createElement(NavItem, {eventKey: 1, href: "#"}, "Link"), 
                    React.createElement(NavItem, {eventKey: 2, href: "#"}, "Link"), 
                    React.createElement(DropdownButton, {eventKey: 3, title: "Dropdown"}, 
                        React.createElement(MenuItem, {eventKey: "1"}, "Action"), 
                        React.createElement(MenuItem, {eventKey: "2"}, "Another action"), 
                        React.createElement(MenuItem, {eventKey: "3"}, "Something else here"), 
                        React.createElement(MenuItem, {divider: true}), 
                        React.createElement(MenuItem, {eventKey: "4"}, "Separated link")
                    )
                ), 
                React.createElement(Nav, {className: "pull-right"}, 
                    React.createElement(NavItem, {eventKey: 1, href: "#"}, "Link"), 
                    React.createElement(NavItem, {eventKey: 2, href: "#"}, "Link"), 
                    React.createElement(DropdownButton, {eventKey: 3, title: "Dropdown"}, 
                        React.createElement(MenuItem, {eventKey: "1"}, "Action"), 
                        React.createElement(MenuItem, {eventKey: "2"}, "Another action"), 
                        React.createElement(MenuItem, {eventKey: "3"}, "Something else here"), 
                        React.createElement(MenuItem, {divider: true}), 
                        React.createElement(MenuItem, {eventKey: "4"}, "Separated link")
                    )
                )
            )
        );
    }
});

export default Header;