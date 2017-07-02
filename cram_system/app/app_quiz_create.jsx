var React = require('react');
var ReactDOM = require('react-dom');
var QuizCreate = require('QuizCreate');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(QuizCreate, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
