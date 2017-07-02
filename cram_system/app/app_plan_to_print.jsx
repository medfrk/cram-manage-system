var React = require('react');
var ReactDOM = require('react-dom');
var PlanToPrint = require('PlanToPrint');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(PlanToPrint, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
