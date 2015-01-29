var LinkVideoApp = require('./components/LinkVideoApp.react');
var React = require('react');
window.React = React; // export for http://fb.me/react-devtools


React.render(
  <LinkVideoApp />,
  document.getElementById('app')
);
