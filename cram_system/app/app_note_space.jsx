var React = require('react');
var ReactDOM = require('react-dom');
var NoteSpace = require('NoteSpace');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(NoteSpace, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
