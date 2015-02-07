import React from 'react';

var ShowAddButton = React.createClass({displayName: "ShowAddButton",
  render: function() {
    return (
      React.createElement("button", {className: "btn btn-success btn-block"}, "Create New Item")
    );
  }
});

export default ShowAddButton;