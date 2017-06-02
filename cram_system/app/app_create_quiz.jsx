var React = require('react');
var ReactDOM = require('react-dom');
var CreateQuiz = require('CreateQuiz');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(CreateQuiz, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
