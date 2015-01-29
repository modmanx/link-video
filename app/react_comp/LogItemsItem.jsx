/** @jsx React.DOM */

'use strict'

var React = require('react')
var moment = require('moment')

module.exports = React.createClass({
    displayName: 'LogItemsItemReact',
    render : function(){
      return <div>
        <small>{moment(this.props.date).format('HH:mm:ss')}</small> - {this.props.msg}
      </div>;
    }
})
