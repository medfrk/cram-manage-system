var React = require('react');
var ReactDOM = require('react-dom');
var QuizList = require('QuizList');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(QuizList, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
