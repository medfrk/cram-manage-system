var React = require('react');
var ReactDOM = require('react-dom');
var StudySummary = require('StudySummary');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(StudySummary, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
