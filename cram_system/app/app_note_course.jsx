var React = require('react');
var ReactDOM = require('react-dom');
var NoteCourse = require('NoteCourse');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(NoteCourse, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
