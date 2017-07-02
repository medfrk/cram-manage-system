var React = require('react');
var ReactDOM = require('react-dom');
var Index = require('Index');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(Index, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
