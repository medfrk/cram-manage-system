var React = require('react');
var ReactDOM = require('react-dom');
var AllStudent = require('AllStudent');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(AllStudent, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
