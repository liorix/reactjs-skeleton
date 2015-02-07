/* jshint -W030 */
'use strict';

import React from 'react';

var FeedForm = React.createClass({displayName: "FeedForm",
  render: function() {
    return (
      React.createElement("form", {className: "container"}, 
        React.createElement("div", {className: "form-group"}, 
          React.createElement("input", {type: "text", className: "form-control", placeholder: "Titles"}), 
          React.createElement("input", {type: "text", className: "form-control", placeholder: "Description"}), 
          React.createElement("button", {className: "btn btn-primary btn-block", type: "submit"}, "Add")
        )
      )
    );
  }
});

export default FeedForm;