/** @jsx React.DOM */

'use strict'

var React = require('react')

module.exports = React.createClass({
    displayName: 'CommentListItemReact',
    render : function(){
      // var commentNodes = this.
      return <div>
          <h4>{this.props.author} <small>{this.props.date}</small></h4>
          <p>{this.props.children}</p>
        </div>;
    }
})
