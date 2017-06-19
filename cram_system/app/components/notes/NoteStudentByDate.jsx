var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var NoteStudentByDateMain = require('NoteStudentByDateMain');

class NoteStudentByDate extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <NoteStudentByDateMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = NoteStudentByDate;
