var React = require('react');
var ReactDOM = require('react-dom');
var QuizToPrint = require('QuizToPrint');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(QuizToPrint, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
