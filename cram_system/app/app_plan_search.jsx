var React = require('react');
var ReactDOM = require('react-dom');
var PlanSearch = require('PlanSearch');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(PlanSearch, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
