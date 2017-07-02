var React = require('react');
var ReactDOM = require('react-dom');
var NoteCourseByDate = require('NoteCourseByDate');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(NoteCourseByDate, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
