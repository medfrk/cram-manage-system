var React = require('react');
var ReactDOM = require('react-dom');
var Homework = require('Homework');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(Homework, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
