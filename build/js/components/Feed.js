import React from 'react';
import FeedList from './FeedList';
import FeedForm from './FeedForm';
import ShowAddButton from './ShowAddButton';

var Feed = React.createClass({displayName: "Feed",

  getInitialState: function() {
    var FEED_ITEMS = [
      {key: '1', title: 'Item 1', description: 'So cool', voteCount: 49},
      {key: '2', title: 'Item 2', description: 'Meh', voteCount: 11},
      {key: '3', title: 'Item 3', description: 'Great', voteCount: 30}
    ];

    return {
      items: FEED_ITEMS
    };
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("div", {className: "container"}, 
          React.createElement(ShowAddButton, null)
        ), 

        React.createElement(FeedForm, null), 
        React.createElement("br", null), 
        React.createElement("br", null), 
        React.createElement(FeedList, {items: this.state.items})
      )
    );
  }
});

export default Feed;