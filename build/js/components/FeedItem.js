import React from 'react';

var FeedItem = React.createClass({displayName: "FeedItem",
  render: function() {
    return (
      React.createElement("li", {className: "list-group-item"}, 
        React.createElement("span", {className: "badge badge-success"}, this.props.voteCount), 
        React.createElement("h4", null, this.props.title), 
        React.createElement("span", null, this.props.desc), 
        React.createElement("span", {className: "pull-right"}, 
          React.createElement("button", {id: "up", className: "btn btn-sm btn-primary"}, "↑"), 
          React.createElement("button", {id: "up", className: "btn btn-sm btn-primary"}, "↓")
        )
      )
    );
  }
});

export default FeedItem;