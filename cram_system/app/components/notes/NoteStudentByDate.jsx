var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var NoteStudentByDateMain = require('NoteStudentByDateMain');

class NoteStudentByDate extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName} />
        <NoteStudentByDateMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = NoteStudentByDate;
