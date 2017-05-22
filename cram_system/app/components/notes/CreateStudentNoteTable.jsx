var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var CreateStudentNoteTableMain = require('CreateStudentNoteTableMain');

class CreateStudentNoteTable extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <CreateStudentNoteTableMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = CreateStudentNoteTable;
