/** @jsx React.DOM */

'use strict'

var React = require('react')

var LogItemsItem = require('./LogItemsItem');

module.exports = React.createClass({
    displayName: 'LogItemsReact',
    render : function(){
      var _html = this.props.data.map(function(item){
        return <LogItemsItem msg={item.msg}></LogItemsItem>
      })
      return <div>
        {_html}
      </div>;
    }
})
