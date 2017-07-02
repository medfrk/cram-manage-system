var React = require('react');
var CramHeader = require('CramHeader');
var CramFooter = require('CramFooter');
var NoteStudentMain = require('NoteStudentMain');

class NoteStudent extends React.Component {
  render() {
    return (
      <div>
        <CramHeader loginState={this.props.loginState} userName={this.props.userName}/>
        <NoteStudentMain />
        <CramFooter />
      </div>
    )
  }
}

module.exports = NoteStudent;
