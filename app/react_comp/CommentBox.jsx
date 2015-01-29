/** @jsx React.DOM */

'use strict'

var React = require('react')
var CommentList = require('./CommentList');
var aja = require('aja');

module.exports = React.createClass({
    displayName: 'CommentBoxReact',
    getInitialState: function() {
      return {
        comments: []
      };
    },
    componentDidMount: function() {

      var that = this;

      // refreshComments.call(that);
      this.getComments();
      setInterval(this.getComments, this.props.poolInterval)

    },
    getComments : function(){
      var that = this;
      aja()
        .url(this.props.url)
        .cache(false)
        .on('success', function(data){
          that.setState({comments: data});
        })
        .on('error', function(err, args){
          // that.setState({comments: data});
          console.log(err)
          console.log(args)
        })
        .go();
    },
    render : function(){
      return <div>
          <h3>Comments</h3>
          <hr />
          <div>
            <CommentList comments={this.state.comments} />
          </div>
        </div>;
    }
})
