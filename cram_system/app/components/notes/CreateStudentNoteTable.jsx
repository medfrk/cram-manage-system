var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var CreateStudentNoteTableMain = require('CreateStudentNoteTableMain');

class CreateStudentNoteTable extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <CreateStudentNoteTableMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = CreateStudentNoteTable;
