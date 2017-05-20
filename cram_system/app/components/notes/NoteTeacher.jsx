var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var NoteTeacherMain = require('NoteTeacherMain');

class NoteTeacher extends React.Component {
  render() {
    return (
      <div>
        <CramHeader />
        <NoteTeacherMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = NoteTeacher;
