var React = require('react');
var ReactDOM = require('react-dom');
var Signing = require('Signing');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(Signing, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
