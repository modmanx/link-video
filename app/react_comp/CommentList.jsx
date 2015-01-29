/** @jsx React.DOM */

'use strict'

var React = require('react')
var CommentListItem = require('./CommentListItem');

module.exports = React.createClass({
    displayName: 'CommentListReact',
    render : function(){

    var commentNodes = this.props.comments.map(function(comment){
      return (
          <CommentListItem author={comment.author} date={comment.date}>
            blabla
          </CommentListItem>
        );
    });

    return (
        <div>
          {commentNodes}
        </div>
      );
  }
})
