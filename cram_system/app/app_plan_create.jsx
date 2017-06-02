var React = require('react');
var ReactDOM = require('react-dom');
var PlanCreate = require('PlanCreate');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(PlanCreate, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
