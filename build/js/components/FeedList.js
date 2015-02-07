import React from 'react';
import FeedItem from './FeedItem';

var FeedList = React.createClass({displayName: "FeedList",

  render: function() {

    var feedItems = this.props.items.map(function(item) {
      return React.createElement(FeedItem, {key: item.key, title: item.title, desc: item.description, voteCount: item.voteCount});
    });

    return (
      React.createElement("ul", {className: "list-group container"}, 
        feedItems
      )
    );
  }
});

export default FeedList;