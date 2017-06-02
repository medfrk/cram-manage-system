var React = require('react');
var ReactDOM = require('react-dom');
var PlanForToday = require('PlanForToday');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(PlanForToday, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
