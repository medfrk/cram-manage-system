var React = require('react');
var ReactDOM = require('react-dom');
var FinishPlan = require('FinishPlan');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(FinishPlan, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
