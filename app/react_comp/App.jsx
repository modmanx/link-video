/** @jsx React.DOM */

'use strict'

var React = require('react')
var CommentBox = require('./CommentBox');
var GLOB = require('./glob')

module.exports = React.createClass({
    displayName: 'AppReact',
    componentDidMount : function(){
      console.log('mounted')
      // GLOB.socket = io.connect('http://127.0.0.1');
      GLOB.socket = io();
      GLOB.socket.emit('client message', 'Woohoo, connected');
      GLOB.socket.on('server message', function(msg){
        console.log('message: ' + msg);
      });
    },
    render: function() {
      return <div>
        <CommentBox url="comments.json" poolInterval="60000" />
      </div>;
    }
})
