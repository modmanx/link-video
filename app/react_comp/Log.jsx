/** @jsx React.DOM */

'use strict'

var React = require('react')

var GLOB = require('./glob')

var LogItems = require('./LogItems');



module.exports = React.createClass({
    displayName: 'LogReact',
    getInitialState: function() {
      return {
        logitems: []
      };
    },
    addLogItem : function(msg){
      var _items = this.state.logitems
      _items.unshift({
        msg : msg,
        date : new Date()
      })
      this.setState({
        logitems : _items
      });
    },
    componentDidMount : function(){
      var that = this
      GLOB.socket.on('server message', function(msg){
        that.addLogItem('ws server message: ' + msg)
      });
      // setTimeout(function(){
      //   for(var i=0; i<100; i++){
      //     that.addLogItem(i + '. asdfasdfasdf asdf as fasd fasdf')        
      //   }
      //   // console.log(that.state.logitems)
      // }, 1000)
    },
    render : function(){
      return <div>
        <h3>App Log</h3>
        <LogItems data={this.state.logitems} />
      </div>;
    }
})
