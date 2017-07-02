var React = require('react');
var ReactDOM = require('react-dom');
var BankLogForCourse = require('BankLogForCourse');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(BankLogForCourse, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
