var React = require('react');
var ReactDOM = require('react-dom');
var SigningCourse = require('SigningCourse');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(SigningCourse, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
