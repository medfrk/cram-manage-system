var React = require('react');
var ReactDOM = require('react-dom');
var CreateStudentNoteTable = require('CreateStudentNoteTable');

const app_element = document.getElementById('app');
ReactDOM.render(
  React.createElement(CreateStudentNoteTable, {loginState: app_element.getAttribute("loginState"), userName: app_element.getAttribute("userName")}),
  app_element
);
