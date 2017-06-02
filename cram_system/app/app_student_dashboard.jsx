var React = require('react');
var ReactDOM = require('react-dom');
var StudentDashboard = require('StudentDashboard');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(StudentDashboard, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
