var React = require('react');
var ReactDOM = require('react-dom');
var Console = require('Console');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(Console, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
