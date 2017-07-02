var React = require('react');
var ReactDOM = require('react-dom');
var BankLogForStudy = require('BankLogForStudy');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(BankLogForStudy, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
