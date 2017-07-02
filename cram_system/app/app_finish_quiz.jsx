var React = require('react');
var ReactDOM = require('react-dom');
var FinishQuiz = require('FinishQuiz');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(FinishQuiz, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
