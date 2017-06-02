var React = require('react');
var ReactDOM = require('react-dom');
var AllCourse = require('AllCourse');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(AllCourse, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
