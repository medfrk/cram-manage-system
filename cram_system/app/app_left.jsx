var React = require('react');
var ReactDOM = require('react-dom');
var Left = require('Left');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(Left, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
