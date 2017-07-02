var React = require('react');
var ReactDOM = require('react-dom');
var BankLogForMeals = require('BankLogForMeals');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(BankLogForMeals, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
