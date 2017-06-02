var React = require('react');
var ReactDOM = require('react-dom');
var NoteStudent = require('NoteStudent');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(NoteStudent, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
