var React = require('react');
var ReactDOM = require('react-dom');
var StudentNoteMore = require('StudentNoteMore');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(StudentNoteMore, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
