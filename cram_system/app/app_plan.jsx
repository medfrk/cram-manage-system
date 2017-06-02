var React = require('react');
var ReactDOM = require('react-dom');
var Plan = require('Plan');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(Plan, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
